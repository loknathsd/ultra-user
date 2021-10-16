import React from 'react';

const Cart = (props) => {
    // console.log(props.cart.income)
    const cart = props.cart;
    let totalIncome = 0;
    for (let i = 0; i < cart.length; i++) {
        const user = cart[i];
        const income =user.income;
        const incomeNumber = Number(income);
        totalIncome = totalIncome + incomeNumber;
       
    }
    return (
        <div>
            <h3>Monthly Income : {totalIncome}</h3>
        </div>
    );
};

export default Cart;