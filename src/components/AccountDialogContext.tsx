// Account dialog access for deeply-nested CTAs (hero "Register" buttons).
import { createContext, useContext } from 'react'

type AccountDialogApi = {
  openAccount: (kind: 'login' | 'register', trigger?: HTMLElement) => void
}

export const AccountDialogContext = createContext<AccountDialogApi>({ openAccount: () => {} })

export const useAccountDialog = () => useContext(AccountDialogContext)
