"use client"

import {
  AlertTriangle,
  CheckCircle2,
  Info,
  Loader2,
  XCircle,
} from "lucide-react"
import { Toaster, toast as sonnerToast } from "sonner"

export const toast = {
  success: (message: string, description?: string) => {
    sonnerToast.success(message, {
      description,
    })
  },

  error: (message: string, description?: string) => {
    sonnerToast.error(message, {
      description,
    })
  },

  warning: (message: string, description?: string) => {
    sonnerToast.warning(message, {
      description,
    })
  },

  info: (message: string, description?: string) => {
    sonnerToast.info(message, {
      description,
    })
  },

  loading: (message: string) => {
    return sonnerToast.loading(message)
  },

  dismiss: (id?: string | number) => {
    sonnerToast.dismiss(id)
  },

  promise: sonnerToast.promise,
}

export function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      expand={false}
      closeButton
      duration={3500}
      gap={8}
      offset={20}
      visibleToasts={4}
      toastOptions={{
        classNames: {
          toast:
            "group flex w-full items-start gap-3 rounded-xl border border-black/10 bg-white px-4 py-3 shadow-xl",

          title:
            "text-sm font-semibold text-karsa-black",

          description:
            "mt-0.5 text-xs leading-relaxed text-karsa-black/50",

          closeButton:
            "border-0 bg-transparent text-karsa-black/30 hover:text-karsa-black",

          success:
            "border-karsa-primary/15",

          error:
            "border-red-200",

          warning:
            "border-yellow-200",

          info:
            "border-blue-200",
        },
      }}
      icons={{
        success: (
          <CheckCircle2
            size={18}
            className="text-karsa-primary"
          />
        ),

        error: (
          <XCircle
            size={18}
            className="text-red-500"
          />
        ),

        warning: (
          <AlertTriangle
            size={18}
            className="text-yellow-500"
          />
        ),

        info: (
          <Info
            size={18}
            className="text-blue-500"
          />
        ),

        loading: (
          <Loader2
            size={18}
            className="animate-spin text-karsa-primary"
          />
        ),
      }}
    />
  )
}