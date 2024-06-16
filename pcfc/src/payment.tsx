import React, { useState } from 'react';

const SimplePaymentForm: React.FC = () => {
    const [formData, setFormData] = useState({
        cardNumber: '12345',
        expiry: 'yesterday',
        cvv: '09856',
        amount: '100000'
    });
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Simulate payment processing (not real payment processing logic)
        console.log('Payment processed with the following data:', formData);
        // Optionally clear the form after submission
        setFormData({
            cardNumber: '12345',
            expiry: 'yesterday',
            cvv: '09856',
            amount: '100000'
        });
        
        setPaymentSuccess(true);

        // Reset payment success status after 5 seconds
        setTimeout(() => {
            setPaymentSuccess(false);
        }, 5000);
    };

    return ( 
        <div className="flex items-center justify-center  bg-gray-100 ">
            <div className="bg-white  rounded px-8 pt-6  mb-2 max-w-sm w-full">
            {paymentSuccess && <h1 className="text-center bg-green-100" >payment succesful</h1>}
                <h1 className="text-2xl font-semibold mb-4 text-center">Simple Payment Form</h1>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="cardNumber" className="block mb-2">Card Number</label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            className="border border-gray-300 rounded p-2 w-full"
                            placeholder="Enter card number"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="expiry" className="block mb-2">Expiry Date</label>
                            <input
                                type="text"
                                id="expiry"
                                name="expiry"
                                value={formData.expiry}
                                onChange={handleChange}
                                className="border border-gray-300 rounded p-2 w-full"
                                placeholder="MM/YY"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="cvv" className="block mb-2">CVV</label>
                            <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                                className="border border-gray-300 rounded p-2 w-full"
                                placeholder="CVV"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="amount" className="block mb-2">Amount</label>
                            <input
                                type="text"
                                id="amount"
                                name="amount"
                                value={formData.amount}
                                onChange={handleChange}
                                className="border border-gray-300 rounded p-2 w-full"
                                placeholder="Enter amount"
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-4">Submit Payment</button>
                </form>
            </div>
        </div>
    );
};

export default SimplePaymentForm;
