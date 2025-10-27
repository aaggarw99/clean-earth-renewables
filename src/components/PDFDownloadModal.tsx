"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XMarkIcon, DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { useToast } from "@/components/ui/toast";

interface PDFDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudyTitle: string;
  caseStudySlug: string;
}

export function PDFDownloadModal({ isOpen, onClose, caseStudyTitle, caseStudySlug }: PDFDownloadModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    customerType: "",
    organizationName: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { addToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.customerType) {
      addToast({
        type: 'error',
        title: 'Missing Information',
        message: 'Please fill in all required fields.',
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/download-case-study', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          customerType: formData.customerType,
          organizationName: formData.organizationName.trim(),
          caseStudySlug,
          caseStudyTitle
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to download PDF');
      }

      // Get the PDF blob
      const blob = await response.blob();
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${caseStudySlug}-case-study.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      addToast({
        type: 'success',
        title: 'PDF Downloaded!',
        message: 'Your case study PDF has been downloaded successfully.',
      });

      // Reset form and close modal
      setFormData({ name: "", email: "", customerType: "", organizationName: "" });
      onClose();

    } catch (error) {
      console.error('Error downloading PDF:', error);
      addToast({
        type: 'error',
        title: 'Download Failed',
        message: 'Unable to download the PDF. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      customerType: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-lg font-semibold">Download Case Study PDF</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <XMarkIcon className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="bg-muted/30 rounded-lg p-3 border border-border/50">
            <div className="flex items-center gap-2 mb-2">
              <DocumentArrowDownIcon className="w-5 h-5 text-primary" />
              <span className="font-medium text-sm text-foreground">Case Study:</span>
            </div>
            <p className="text-sm text-muted-foreground">{caseStudyTitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="customerType">Customer Type *</Label>
              <Select value={formData.customerType} onValueChange={handleSelectChange} disabled={isLoading}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your customer type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Renter / Homeowner">Renter / Homeowner</SelectItem>
                  <SelectItem value="Small Business / Non-profit">Small Business / Non-profit</SelectItem>
                  <SelectItem value="Landowner">Landowner</SelectItem>
                  <SelectItem value="Large Enterprise">Large Enterprise</SelectItem>
                  <SelectItem value="Municipality">Municipality</SelectItem>
                  <SelectItem value="University">University</SelectItem>
                  <SelectItem value="School">School</SelectItem>
                  <SelectItem value="Hospital">Hospital</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="organizationName">Organization Name (if applicable)</Label>
              <Input
                id="organizationName"
                name="organizationName"
                type="text"
                value={formData.organizationName}
                onChange={handleInputChange}
                placeholder="Enter your organization name"
                disabled={isLoading}
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Downloading...
                  </>
                ) : (
                  <>
                    <DocumentArrowDownIcon className="w-4 h-4 mr-2" />
                    Download PDF
                  </>
                )}
              </Button>
            </div>
          </form>

          <p className="text-xs text-muted-foreground text-center">
            By downloading this PDF, you agree to receive relevant communications from Clean Earth Renewables.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
