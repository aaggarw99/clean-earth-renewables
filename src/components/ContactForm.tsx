"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { useToast } from "@/components/ui/toast";

// Field types
export type FieldType = 
  | "customerType"
  | "utility"
  | "name"
  | "email"
  | "phone"
  | "state"
  | "stateText"
  | "address"
  | "city"
  | "companyName"
  | "zipCode"
  | "message"
  | "fileUpload";

// Field configuration
export interface FieldConfig {
  type: FieldType;
  required?: boolean;
  label?: string;
  placeholder?: string;
}

// Form data interface
interface FormData {
  customerType: string;
  utility: string;
  name: string;
  email: string;
  phone: string;
  state: string;
  stateText: string;
  address: string;
  city: string;
  companyName: string;
  zipCode: string;
  message: string;
  fileUpload?: File;
}

// Options for select fields
const customerTypes = [
  "Renter / Homeowner",
  "Small Business / Non-profit", 
  "Landowner",
  "Large Enterprise",
  "Municipality",
  "University",
  "School",
  "Hospital"
];

const utilities = [
  "ACE (NJ)",
  "Ameren Illinois",
  "Baltimore Gas & Electric (BGE)",
  "Central Hudson (NY)",
  "Central Maine Power (CMP)",
  "Commonwealth Edison (ComEd)",
  "Delmarva Power (DE, MA)",
  "Dominion Power (VA)",
  "El Paso (NM)",
  "Eversource (MA - West, East, NSTAR, NH)",
  "JCPL (NJ)",
  "Orange & Rockland Utility",
  "National Grid (NY, MA - Central, East)",
  "NYSEG",
  "Rochester Gas & Electric",
  "Versant Power (South, Bangor Hydro District)",
  "Xcel (CO & MN)"
];

const states = [
  "Colorado",
  "Delaware", 
  "Illinois",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Minnesota",
  "New Jersey",
  "New Mexico",
  "New York",
  "Washington D.C.",
  "Rhode Island",
  "Virginia"
];

interface ContactFormProps {
  fields: FieldConfig[];
  title?: string;
  subtitle?: string;
  submitText?: string;
  onSubmit?: (data: FormData) => void;
  className?: string;
}

export function ContactForm({
  fields,
  title,
  subtitle,
  submitText = "Submit Request",
  onSubmit,
  className = ""
}: ContactFormProps) {
  const { addToast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    customerType: "",
    utility: "",
    name: "",
    email: "",
    phone: "",
    state: "",
    stateText: "",
    address: "",
    city: "",
    companyName: "",
    zipCode: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if field should be shown
  const shouldShowField = (type: FieldType): boolean => {
    return fields.some(field => field.type === type);
  };

  // Get field config by type
  const getFieldConfig = (type: FieldType): FieldConfig => {
    return fields.find(field => field.type === type) || { type, required: false };
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    fields.forEach(field => {
      if (field.required) {
        const value = formData[field.type];
        if (!value || (typeof value === 'string' && value.trim() === "")) {
          newErrors[field.type] = "This field is required";
        }
      }

      // Email validation
      if (field.type === "email" && formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }

      // Phone validation
      if (field.type === "phone" && formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ""))) {
        newErrors.phone = "Please enter a valid phone number";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create FormData to handle file uploads
      const formDataToSend = new FormData();
      
      // Add all form fields to FormData
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          if (key === 'fileUpload' && value instanceof File) {
            formDataToSend.append(key, value);
          } else if (typeof value === 'string') {
            formDataToSend.append(key, value);
          }
        }
      });

      // Send form data to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend, // Don't set Content-Type header - let browser set it with boundary
      });

      const result = await response.json();

      if (response.ok) {
        // Success - reset form and show success message
        setFormData({
          customerType: "",
          utility: "",
          name: "",
          email: "",
          phone: "",
          state: "",
          stateText: "",
          address: "",
          city: "",
          companyName: "",
          zipCode: "",
          message: ""
        });
        
        // Reset file input
        const fileInput = document.getElementById('fileUpload') as HTMLInputElement;
        if (fileInput) {
          fileInput.value = '';
        }
        
        // Show success message
        addToast({
          type: "success",
          title: "Message sent successfully!",
          message: "Thank you for contacting us. We'll get back to you soon."
        });
        
        // Call onSubmit callback if provided
        if (onSubmit) {
          await onSubmit(formData);
        }
      } else {
        // Error - show error message
        addToast({
          type: "error",
          title: "Failed to send message",
          message: result.error || 'Please try again or contact us directly.'
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      addToast({
        type: "error",
        title: "Network error",
        message: "Please check your connection and try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleInputChange = (field: FieldType, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (10MB limit)
      const maxSize = 10 * 1024 * 1024; // 10MB in bytes
      if (file.size > maxSize) {
        addToast({
          type: "error",
          title: "File too large",
          message: "File size must be less than 10MB. Please choose a smaller file."
        });
        e.target.value = ''; // Clear the input
        return;
      }

      // Check file type (allow common document and image types)
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'text/plain',
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif'
      ];

      if (!allowedTypes.includes(file.type)) {
        addToast({
          type: "error",
          title: "Invalid file type",
          message: "Please upload a valid file type: PDF, Word, Excel, text, or image files (JPEG, PNG, GIF)."
        });
        e.target.value = ''; // Clear the input
        return;
      }

      setFormData(prev => ({ ...prev, fileUpload: file }));
      // Clear any file-related errors
      if (errors.fileUpload) {
        setErrors(prev => ({ ...prev, fileUpload: "" }));
      }
    }
  };

  // Render field based on type
  const renderField = (fieldConfig: FieldConfig) => {
    const { type, required, label, placeholder } = fieldConfig;
    const value = formData[type];
    const error = errors[type];

    const baseInputProps = {
      id: type,
      value: typeof value === 'string' ? value : "",
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
        handleInputChange(type, e.target.value),
      placeholder: placeholder,
      className: `w-full px-3 py-2 border-b-2 bg-transparent focus:outline-none focus:border-primary transition-colors ${error ? 'border-red-500' : 'border-gray-300'}`,
      required
    };

    switch (type) {
      case "customerType":
        return (
          <div className="space-y-2">
            <label htmlFor={type} className="block text-sm font-medium">
              {label || "I am a"} {required && <span className="text-red-500">*</span>}
            </label>
            <select
              value={typeof value === 'string' ? value : ""}
              onChange={(e) => handleInputChange(type, e.target.value)}
              className={`w-full px-3 py-2 border-b-2 bg-transparent focus:outline-none focus:border-primary transition-colors ${error ? 'border-red-500' : 'border-gray-300'}`}
              required={required}
            >
              <option value="">Select customer type</option>
              {customerTypes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {error && (
              <div className="flex items-center space-x-2 mt-2 p-2 bg-red-50 border border-red-200 rounded-md">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <p className="text-sm text-red-700 font-medium">{error}</p>
              </div>
            )}
          </div>
        );

      case "utility":
        return (
          <div className="space-y-2">
            <label htmlFor={type} className="block text-sm font-medium">
              {label || "Community Solar Approved Utilities"} {required && <span className="text-red-500">*</span>}
            </label>
            <select
              value={typeof value === 'string' ? value : ""}
              onChange={(e) => handleInputChange(type, e.target.value)}
              className={`w-full px-3 py-2 border-b-2 bg-transparent focus:outline-none focus:border-primary transition-colors ${error ? 'border-red-500' : 'border-gray-300'}`}
              required={required}
            >
              <option value="">Select your utility</option>
              {utilities.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {error && (
              <div className="flex items-center space-x-2 mt-2 p-2 bg-red-50 border border-red-200 rounded-md">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <p className="text-sm text-red-700 font-medium">{error}</p>
              </div>
            )}
          </div>
        );

      case "state":
        return (
          <div className="space-y-2">
            <label htmlFor={type} className="block text-sm font-medium">
              {label || "Community Solar-Approved States"} {required && <span className="text-red-500">*</span>}
            </label>
            <select
              value={typeof value === 'string' ? value : ""}
              onChange={(e) => handleInputChange(type, e.target.value)}
              className={`w-full px-3 py-2 border-b-2 bg-transparent focus:outline-none focus:border-primary transition-colors ${error ? 'border-red-500' : 'border-gray-300'}`}
              required={required}
            >
              <option value="">Select your state</option>
              {states.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {error && (
              <div className="flex items-center space-x-2 mt-2 p-2 bg-red-50 border border-red-200 rounded-md">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <p className="text-sm text-red-700 font-medium">{error}</p>
              </div>
            )}
          </div>
        );

      case "stateText":
        return (
          <div className="space-y-2">
            <label htmlFor={type} className="block text-sm font-medium">
              {label || "State"} {required && <span className="text-red-500">*</span>}
            </label>
            <input
              {...baseInputProps}
              type="text"
            />
            {error && (
              <div className="flex items-center space-x-2 mt-2 p-2 bg-red-50 border border-red-200 rounded-md">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <p className="text-sm text-red-700 font-medium">{error}</p>
              </div>
            )}
          </div>
        );

      case "message":
        return (
          <div className="space-y-2">
            <label htmlFor={type} className="block text-sm font-medium">
              {label || "Message"} {required && <span className="text-red-500">*</span>}
            </label>
            <textarea
              {...baseInputProps}
              rows={4}
              placeholder={placeholder || "Tell us about your project..."}
            />
            {error && (
              <div className="flex items-center space-x-2 mt-2 p-2 bg-red-50 border border-red-200 rounded-md">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <p className="text-sm text-red-700 font-medium">{error}</p>
              </div>
            )}
          </div>
        );

      case "fileUpload":
        return (
          <div className="space-y-2">
            <label htmlFor={type} className="block text-sm font-medium">
              {label || "Add File"} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
              <input
                type="file"
                id={type}
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.xls,.xlsx,.txt,.jpg,.jpeg,.png,.gif"
                className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />
              <PaperClipIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
            <p className="text-xs text-muted-foreground">
              Accepted formats: PDF, Word, Excel, text, images (JPEG, PNG, GIF). Max size: 10MB.
            </p>
            {formData.fileUpload && (
              <div className="flex items-center space-x-2 mt-2 p-2 bg-green-50 border border-green-200 rounded-md">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <p className="text-sm text-green-700 font-medium">
                  File selected: {formData.fileUpload.name} ({(formData.fileUpload.size / 1024 / 1024).toFixed(2)} MB)
                </p>
              </div>
            )}
            {error && (
              <div className="flex items-center space-x-2 mt-2 p-2 bg-red-50 border border-red-200 rounded-md">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <p className="text-sm text-red-700 font-medium">{error}</p>
              </div>
            )}
          </div>
        );

      default:
        return (
          <div className="space-y-2">
            <label htmlFor={type} className="block text-sm font-medium">
              {label || type.charAt(0).toUpperCase() + type.slice(1)} {required && <span className="text-red-500">*</span>}
            </label>
            <input
              {...baseInputProps}
              type={type === "email" ? "email" : type === "phone" ? "tel" : "text"}
            />
            {error && (
              <div className="flex items-center space-x-2 mt-2 p-2 bg-red-50 border border-red-200 rounded-md">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <p className="text-sm text-red-700 font-medium">{error}</p>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>}
          {subtitle && <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
        </div>
      )}
      <div className="bg-muted/30 backdrop-blur-sm rounded-xl p-8 border border-border/20">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shouldShowField("name") && renderField(getFieldConfig("name"))}
            {shouldShowField("email") && renderField(getFieldConfig("email"))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shouldShowField("customerType") && renderField(getFieldConfig("customerType"))}
            {shouldShowField("utility") && renderField(getFieldConfig("utility"))}
            {shouldShowField("state") && renderField(getFieldConfig("state"))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shouldShowField("address") && renderField(getFieldConfig("address"))}
            {shouldShowField("city") && renderField(getFieldConfig("city"))}
            {shouldShowField("stateText") && renderField(getFieldConfig("stateText"))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shouldShowField("companyName") && renderField(getFieldConfig("companyName"))}
            {shouldShowField("phone") && renderField(getFieldConfig("phone"))}
            {shouldShowField("zipCode") && renderField(getFieldConfig("zipCode"))}
          </div>

          {shouldShowField("message") && renderField(getFieldConfig("message"))}
          {shouldShowField("fileUpload") && renderField(getFieldConfig("fileUpload"))}

          <Button 
            type="submit" 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : submitText}
          </Button>
        </form>
      </div>
    </div>
  );
} 