"use client";

import { useState, useEffect, useCallback } from "react";

interface CalculatorField {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  type: "text" | "number" | "result";
  required?: boolean;
}

interface SavingsCalculatorProps {
  fields?: CalculatorField[];
  className?: string;
}

export function SavingsCalculator({ 
  fields = [
    {
      id: "zipCode",
      label: "Zip Code",
      value: "",
      placeholder: "Enter your zip code",
      type: "text",
      required: true
    },
    {
      id: "monthlyBill",
      label: "Monthly Energy Bill",
      value: "",
      placeholder: "$0",
      type: "number",
      required: true
    },
    {
      id: "annualSavings",
      label: "Annual Savings",
      value: "",
      placeholder: "$0",
      type: "result",
      required: false
    }
  ],
  className = ""
}: SavingsCalculatorProps) {
  const [calculatorFields, setCalculatorFields] = useState<CalculatorField[]>(fields);

  // Calculate savings based on zip code and monthly bill
  const calculateSavings = (zipCode: string, monthlyBill: string): string => {
    if (!zipCode || !monthlyBill) return "";
    
    const bill = parseFloat(monthlyBill.replace(/[$,]/g, ""));
    if (isNaN(bill) || bill <= 0) return "";
    
    // Basic formula: 12% average savings on monthly bill * 12 months
    // This can be enhanced with zip code specific rates later

    // TODO: Add zip code specific rates
    const monthlySavings = bill * 0.1;
    const annualSavings = monthlySavings * 12;
    
    return `$${annualSavings.toFixed(0)}`;
  };

  // Handle field value changes
  const handleFieldChange = useCallback((id: string, value: string) => {
    const updatedFields = calculatorFields.map(field => 
      field.id === id ? { ...field, value } : field
    );
    setCalculatorFields(updatedFields);
  }, [calculatorFields]);

  // Auto-calculate when zip code or monthly bill changes
  useEffect(() => {
    const zipCodeField = calculatorFields.find(f => f.id === "zipCode");
    const monthlyBillField = calculatorFields.find(f => f.id === "monthlyBill");
    const annualSavingsField = calculatorFields.find(f => f.id === "annualSavings");
    
    if (zipCodeField && monthlyBillField && annualSavingsField) {
      const savings = calculateSavings(zipCodeField.value, monthlyBillField.value);
      if (savings !== annualSavingsField.value) {
        handleFieldChange("annualSavings", savings);
      }
    }
  }, [calculatorFields, handleFieldChange]);

  return (
    <div className={`w-full ${className}`}>
      {/* Input fields row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {calculatorFields.filter(field => field.type !== "result").map((field) => (
          <div key={field.id} className="space-y-2">
            <label 
              htmlFor={field.id}
              className="block text-sm font-medium text-foreground"
            >
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            
            <input
              type={field.type}
              id={field.id}
              value={field.value}
              onChange={(e) => handleFieldChange(field.id, e.target.value)}
              placeholder={field.placeholder}
              required={field.required}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            />
          </div>
        ))}
      </div>
      
      {/* Result field row */}
      {calculatorFields.filter(field => field.type === "result").map((field) => (
        <div key={field.id} className="space-y-2">
          <label 
            htmlFor={field.id}
            className="block text-sm font-medium text-foreground"
          >
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          
          <div className="relative">
            <input
              type="text"
              id={field.id}
              value={field.value}
              placeholder={field.placeholder}
              readOnly
              className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-lg font-semibold text-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            {/* isCalculating && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted/80 rounded-lg">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
              </div>
            ) */}
          </div>
        </div>
      ))}
      
      {calculatorFields.find(f => f.id === "annualSavings")?.value && (
        <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            Based on average community solar savings in your area. Actual savings may vary.
          </p>
        </div>
      )}
    </div>
  );
} 