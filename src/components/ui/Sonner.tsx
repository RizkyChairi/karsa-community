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
  success: (title: string, description?: string) => {
    sonnerToast.success(title, {
      description,
    })
  },

  error: (title: string, description?: string) => {
    sonnerToast.error(title, {
      description,
    })
  },

  warning: (title: string, description?: string) => {
    sonnerToast.warning(title, {
      description,
    })
  },

  info: (title: string, description?: string) => {
    sonnerToast.info(title, {
      description,
    })
  },

  loading: (title: string) => {
    return sonnerToast.loading(title)
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
      gap={10}
      offset={24}
      visibleToasts={4}
      toastOptions={{
        classNames: {
          toast: `
            group
            flex
            w-full
            items-start
            gap-3
            rounded-2xl
            border
            border-karsa-black/[0.08]
            bg-white
            px-4
            py-3.5
            shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          `,

          title: `
            text-[13px]
            font-semibold
            leading-5
            tracking-[-0.01em]
            text-karsa-black
          `,

          description: `
            mt-0.5
            text-[12px]
            font-normal
            leading-5
            text-karsa-black/45
          `,

          closeButton: `
            border-0
            bg-transparent
            text-karsa-black/25
            transition-colors
            hover:bg-transparent
            hover:text-karsa-black
          `,

          success: "",
          error: "",
          warning: "",
          info: "",
        },
      }}
      icons={{
        success: (
          <CheckCircle2
            size={18}
            strokeWidth={2}
            className="text-karsa-black/70"
          />
        ),

        error: (
          <XCircle
            size={18}
            strokeWidth={2}
            className="text-karsa-black/70"
          />
        ),

        warning: (
          <AlertTriangle
            size={18}
            strokeWidth={2}
            className="text-karsa-black/70"
          />
        ),

        info: (
          <Info
            size={18}
            strokeWidth={2}
            className="text-karsa-black/70"
          />
        ),

        loading: (
          <Loader2
            size={18}
            strokeWidth={2}
            className="animate-spin text-karsa-black/60"
          />
        ),
      }}
    />
  )
}