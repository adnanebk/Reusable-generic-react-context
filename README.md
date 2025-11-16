A generic context hook that share a state to multiple components

**How to use it**

* First create contexts that you want to have like this

export const [CartItemsProvider,useCartItemsContext] = createGenericContext<CartItem[]>([]);
export const [CategoryProvider,useCategoryContext] = createGenericContext<Category>();
export const [ProductSearchProvider,useProductSearchContext] = createGenericContext<string>();

* and then wrap the components that you what to share contexts with the GlobalProvider

<GlobalProvider providers={[CartItemsProvider,CategoryProvider,ProductSearchProvider]}>
...
</GlobalProvider>

* How to Access the contexts data in components :

const [items,setItems] = useCartItemsContext();

