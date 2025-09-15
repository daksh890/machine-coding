declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }

  declare global {
    const definePageMeta: (meta: Record<string, any>) => void
  }
  
  export {}