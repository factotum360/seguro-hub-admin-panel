
import React, { useState } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { useCurrency } from '@/contexts/CurrencyContext';
import { DollarSign, RefreshCw, Save, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const CurrencySettings = () => {
  const navigate = useNavigate();
  const { 
    currency, setCurrency,
    conversionRate, setConversionRate,
    useAPI, setUseAPI,
    apiURL, setAPIURL,
    apiKey, setAPIKey,
    lastUpdated
  } = useCurrency();

  // Local state for form
  const [localSettings, setLocalSettings] = useState({
    currency,
    conversionRate,
    useAPI,
    apiURL,
    apiKey
  });

  const handleChange = (field: string, value: any) => {
    setLocalSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setCurrency(localSettings.currency);
    setConversionRate(localSettings.conversionRate);
    setUseAPI(localSettings.useAPI);
    setAPIURL(localSettings.apiURL);
    setAPIKey(localSettings.apiKey);
    
    toast({
      title: "Configuración guardada",
      description: "La configuración de moneda se ha actualizado correctamente.",
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/dashboard/settings')}
              className="mr-2"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl font-bold tracking-tight">Configuración de Moneda</h1>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Moneda Principal</CardTitle>
            <CardDescription>Configura la moneda principal y las tasas de cambio</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup 
              value={localSettings.currency}
              onValueChange={(value) => handleChange('currency', value)}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="USD" id="usd" />
                <Label htmlFor="usd" className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-1" /> USD (Dólar)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="VEF" id="vef" />
                <Label htmlFor="vef">VEF (Bolívar)</Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tasa de Cambio</CardTitle>
            <CardDescription>Configura la tasa de cambio de USD a VEF</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="conversion-rate">Tasa de cambio (USD a VEF)</Label>
              <div className="flex items-center space-x-2">
                <Input 
                  id="conversion-rate" 
                  type="number" 
                  value={localSettings.conversionRate}
                  onChange={(e) => handleChange('conversionRate', parseFloat(e.target.value))}
                  placeholder="95.5" 
                  className="max-w-xs"
                />
                <Button variant="outline" size="sm">
                  <RefreshCw className="h-4 w-4 mr-1" /> Actualizar
                </Button>
              </div>
              <p className="text-xs text-gray-500">
                Última actualización: {lastUpdated}
              </p>
            </div>
            
            <div className="border-t pt-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="use-api">Usar API para actualización automática</Label>
                  <Switch 
                    id="use-api" 
                    checked={localSettings.useAPI}
                    onCheckedChange={(checked) => handleChange('useAPI', checked)}
                  />
                </div>
                <p className="text-xs text-gray-500">
                  Configura una API externa para actualizar automáticamente la tasa de cambio
                </p>
              </div>
              
              {localSettings.useAPI && (
                <div className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="api-url">URL de la API</Label>
                    <Input 
                      id="api-url" 
                      value={localSettings.apiURL}
                      onChange={(e) => handleChange('apiURL', e.target.value)}
                      placeholder="https://api.exchangeratesapi.io/latest" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="api-key">API Key</Label>
                    <Input 
                      id="api-key" 
                      value={localSettings.apiKey}
                      onChange={(e) => handleChange('apiKey', e.target.value)}
                      placeholder="Tu clave de API" 
                      type="password"
                    />
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex justify-end">
              <Button onClick={handleSave}>
                <Save className="h-4 w-4 mr-2" /> Guardar configuración
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Historial de Tasas de Cambio</CardTitle>
            <CardDescription>Registro histórico de tasas de cambio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="opacity-50 flex justify-center items-center p-10">
              <p className="text-lg">Implementación pendiente del historial de tasas</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default CurrencySettings;
