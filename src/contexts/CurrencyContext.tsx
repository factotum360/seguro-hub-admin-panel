
import React, { createContext, useState, useContext, useEffect } from 'react';

type CurrencyType = 'USD' | 'VEF';

interface CurrencyContextType {
  currency: CurrencyType;
  conversionRate: number;
  useAPI: boolean;
  apiURL: string;
  apiKey: string;
  lastUpdated: string;
  setCurrency: (currency: CurrencyType) => void;
  setConversionRate: (rate: number) => void;
  setUseAPI: (use: boolean) => void;
  setAPIURL: (url: string) => void;
  setAPIKey: (key: string) => void;
  convertAmount: (amount: number, targetCurrency: CurrencyType) => number;
  formatCurrency: (amount: number, currency?: CurrencyType) => string;
}

const defaultCurrencyContext: CurrencyContextType = {
  currency: 'USD',
  conversionRate: 95.5,
  useAPI: false,
  apiURL: '',
  apiKey: '',
  lastUpdated: new Date().toISOString().split('T')[0],
  setCurrency: () => {},
  setConversionRate: () => {},
  setUseAPI: () => {},
  setAPIURL: () => {},
  setAPIKey: () => {},
  convertAmount: () => 0,
  formatCurrency: () => '',
};

const CurrencyContext = createContext<CurrencyContextType>(defaultCurrencyContext);

export const useCurrency = () => useContext(CurrencyContext);

interface CurrencyProviderProps {
  children: React.ReactNode;
}

export const CurrencyProvider = ({ children }: CurrencyProviderProps) => {
  // Try to load saved currency settings from localStorage
  const getSavedSettings = () => {
    try {
      const savedSettings = localStorage.getItem('currencySettings');
      if (savedSettings) {
        return JSON.parse(savedSettings);
      }
    } catch (error) {
      console.error('Error loading currency settings:', error);
    }
    return null;
  };

  const savedSettings = getSavedSettings();

  const [currency, setCurrency] = useState<CurrencyType>(savedSettings?.currency || 'USD');
  const [conversionRate, setConversionRate] = useState(savedSettings?.conversionRate || 95.5);
  const [useAPI, setUseAPI] = useState(savedSettings?.useAPI || false);
  const [apiURL, setAPIURL] = useState(savedSettings?.apiURL || '');
  const [apiKey, setAPIKey] = useState(savedSettings?.apiKey || '');
  const [lastUpdated, setLastUpdated] = useState(savedSettings?.lastUpdated || new Date().toISOString().split('T')[0]);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    const settings = {
      currency,
      conversionRate,
      useAPI,
      apiURL,
      apiKey,
      lastUpdated,
    };
    
    localStorage.setItem('currencySettings', JSON.stringify(settings));
  }, [currency, conversionRate, useAPI, apiURL, apiKey, lastUpdated]);

  // Function to convert amounts between currencies
  const convertAmount = (amount: number, targetCurrency: CurrencyType): number => {
    if (currency === targetCurrency) return amount;
    
    if (currency === 'USD' && targetCurrency === 'VEF') {
      return amount * conversionRate;
    } else {
      return amount / conversionRate;
    }
  };

  // Function to format currency with the correct symbol
  const formatCurrency = (amount: number, specificCurrency?: CurrencyType): string => {
    const currencyToUse = specificCurrency || currency;
    
    if (currencyToUse === 'USD') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
    } else {
      return new Intl.NumberFormat('es-VE', {
        style: 'currency',
        currency: 'VES',
        maximumFractionDigits: 2,
      }).format(amount);
    }
  };

  // TODO: Add API fetching function for automatic conversion rates

  const value = {
    currency,
    conversionRate,
    useAPI,
    apiURL,
    apiKey,
    lastUpdated,
    setCurrency,
    setConversionRate,
    setUseAPI,
    setAPIURL,
    setAPIKey,
    convertAmount,
    formatCurrency,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};
