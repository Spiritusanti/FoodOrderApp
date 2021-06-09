# Food Order App

Project built to solidify first 10 course modules for React - The Complete Guide from Maximilian Schwarzmüller.


## Hooks used
1. useState - managing local states such as in HeaderCartButton to manage animations along with useEffect
2. UseEffect - used as mentioned above
3. UseRef - to handle form inputs from the MealItemForm using the custom Input Component leveraging React.forwardRef()
4. UseReducer - used in conjunction with the CartProvider to handle updating app-wide state through adding and removing items from the cart.
5. useContext - used Provider and Consumer pattern to pass the cart state app wide to avoid unnecessary prop drilling.