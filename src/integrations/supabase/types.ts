export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      claims: {
        Row: {
          amount_usd: number
          amount_vef: number | null
          created_at: string
          date: string
          description: string
          id: string
          policy_id: string
          status: string
          updated_at: string
        }
        Insert: {
          amount_usd: number
          amount_vef?: number | null
          created_at?: string
          date: string
          description: string
          id: string
          policy_id: string
          status: string
          updated_at?: string
        }
        Update: {
          amount_usd?: number
          amount_vef?: number | null
          created_at?: string
          date?: string
          description?: string
          id?: string
          policy_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "claims_policy_id_fkey"
            columns: ["policy_id"]
            isOneToOne: false
            referencedRelation: "policies"
            referencedColumns: ["id"]
          },
        ]
      }
      clients: {
        Row: {
          address: string | null
          created_at: string
          email: string | null
          id: string
          last_contact: string | null
          name: string
          phone: string | null
          status: string
          type: string
          updated_at: string
        }
        Insert: {
          address?: string | null
          created_at?: string
          email?: string | null
          id?: string
          last_contact?: string | null
          name: string
          phone?: string | null
          status: string
          type: string
          updated_at?: string
        }
        Update: {
          address?: string | null
          created_at?: string
          email?: string | null
          id?: string
          last_contact?: string | null
          name?: string
          phone?: string | null
          status?: string
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      emails: {
        Row: {
          content: string
          created_at: string
          from_email: string
          id: string
          related_to: string | null
          related_type: string | null
          sent_date: string | null
          status: string
          subject: string
          to_email: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          from_email: string
          id?: string
          related_to?: string | null
          related_type?: string | null
          sent_date?: string | null
          status: string
          subject: string
          to_email: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          from_email?: string
          id?: string
          related_to?: string | null
          related_type?: string | null
          sent_date?: string | null
          status?: string
          subject?: string
          to_email?: string
          updated_at?: string
        }
        Relationships: []
      }
      exchange_rates: {
        Row: {
          created_at: string
          date: string
          id: string
          rate: number
        }
        Insert: {
          created_at?: string
          date?: string
          id?: string
          rate: number
        }
        Update: {
          created_at?: string
          date?: string
          id?: string
          rate?: number
        }
        Relationships: []
      }
      files: {
        Row: {
          created_at: string
          file_path: string
          file_size: number
          file_type: string
          filename: string
          id: string
          related_to: string
          related_type: string
          uploaded_at: string
        }
        Insert: {
          created_at?: string
          file_path: string
          file_size: number
          file_type: string
          filename: string
          id?: string
          related_to: string
          related_type: string
          uploaded_at?: string
        }
        Update: {
          created_at?: string
          file_path?: string
          file_size?: number
          file_type?: string
          filename?: string
          id?: string
          related_to?: string
          related_type?: string
          uploaded_at?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string
          description: string
          id: string
          read: boolean
          related_to: string | null
          related_type: string | null
          title: string
          type: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          read?: boolean
          related_to?: string | null
          related_type?: string | null
          title: string
          type: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          read?: boolean
          related_to?: string | null
          related_type?: string | null
          title?: string
          type?: string
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount_usd: number
          amount_vef: number | null
          created_at: string
          id: string
          payment_date: string
          payment_method: string
          policy_id: string
          status: string
          updated_at: string
        }
        Insert: {
          amount_usd: number
          amount_vef?: number | null
          created_at?: string
          id?: string
          payment_date: string
          payment_method: string
          policy_id: string
          status: string
          updated_at?: string
        }
        Update: {
          amount_usd?: number
          amount_vef?: number | null
          created_at?: string
          id?: string
          payment_date?: string
          payment_method?: string
          policy_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_policy_id_fkey"
            columns: ["policy_id"]
            isOneToOne: false
            referencedRelation: "policies"
            referencedColumns: ["id"]
          },
        ]
      }
      policies: {
        Row: {
          client_id: string
          commission_usd: number
          commission_vef: number | null
          company: string
          created_at: string
          end_date: string
          id: string
          payment_status: string
          premium_usd: number
          premium_vef: number | null
          start_date: string
          status: string
          type: string
          updated_at: string
        }
        Insert: {
          client_id: string
          commission_usd: number
          commission_vef?: number | null
          company: string
          created_at?: string
          end_date: string
          id: string
          payment_status: string
          premium_usd: number
          premium_vef?: number | null
          start_date: string
          status: string
          type: string
          updated_at?: string
        }
        Update: {
          client_id?: string
          commission_usd?: number
          commission_vef?: number | null
          company?: string
          created_at?: string
          end_date?: string
          id?: string
          payment_status?: string
          premium_usd?: number
          premium_vef?: number | null
          start_date?: string
          status?: string
          type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "policies_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      tasks: {
        Row: {
          created_at: string
          description: string | null
          due_date: string
          id: string
          priority: string
          related_to: string | null
          related_type: string | null
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          due_date: string
          id?: string
          priority: string
          related_to?: string | null
          related_type?: string | null
          status: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          due_date?: string
          id?: string
          priority?: string
          related_to?: string | null
          related_type?: string | null
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          address: string | null
          bio: string | null
          company: string | null
          created_at: string
          email: string
          id: string
          name: string
          phone: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          bio?: string | null
          company?: string | null
          created_at?: string
          email: string
          id: string
          name: string
          phone?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          bio?: string | null
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          name?: string
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_latest_exchange_rate: {
        Args: Record<PropertyKey, never>
        Returns: {
          rate: number
          date: string
        }[]
      }
      update_vef_values_v2: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
