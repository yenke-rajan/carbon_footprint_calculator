import React, { useState } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import { TERipple } from 'tw-elements-react';

interface SearchBasicExampleProps {}

interface DecodedToken {
    userId: string;
}

function pointForCar(userQuantity) {
    return userQuantity * 2.31;
}

function pointForHeavyVehicle(userQuantity){
    return userQuantity*2.68;
}
function pointForTreePlantation(userQuantity){
    return -5;
}
function pointForTwoVehicle(userQuantity){
    return userQuantity*0.113;
}
function pointForWalking(userQuantity){
    return 0;
}
function pointForFlight(userQuantity){
    return userQuantity*0.115;
}
function pointForPublicBus(userQuantity){
    return userQuantity*0.102;
}
function pointForTrain(userQuantity){
    return userQuantity*0.041;
}
function pointForElectricity(userQuantity){
    return userQuantity*0.475;
}
function pointForNaturalGas(userQuantity){
    return userQuantity*0.185;
}
function pointForBeef(userQuantity){
    return userQuantity*27;
}
function pointForLamb(userQuantity){
    return userQuantity*39.2;
}
function pointForChicken(userQuantity){
    return userQuantity*6.9;
}
function pointForPork(userQuantity){
    return userQuantity*12.1;
}
function pointForMilk(userQuantity){
    return userQuantity*1.3;
}
function pointForRice(userQuantity){
    return userQuantity*2.7;
}
function pointForPotatoes(userQuantity){
    return userQuantity*0.24;
}
function pointForApple(userQuantity){
    return userQuantity*0.3;
}
function pointForBananas(userQuantity){
    return userQuantity*0.8;
}
function pointForOranges(userQuantity){
    return userQuantity*0.5;
}
function pointForCoffee(userQuantity){
    return userQuantity*17;
}
function pointForTea(userQuantity){
    return userQuantity*1.5;
}
function pointForBeer(userQuantity){
    return userQuantity*0.7;
}
function pointForWine(userQuantity){
    return userQuantity*1.2;
}
function pointForJeans(userQuantity){
    return userQuantity*33.4;
}
function pointForShoes(userQuantity){
    return userQuantity* 14;
}
function pointForJacket(userQuantity){
    return userQuantity* 25;
}

const SearchBasicExample: React.FC<SearchBasicExampleProps> = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [quantity, setQuantity] = useState<number | ''>('');
    const [dummyData] = useState<string[]>([
        'Car',
        'HeavyVehicle',
        'TreePlantation',
        'TwoVehicle',
        'Walking',
        'Flight',
        'PublicBus',
        'Train',
        'Electricity',
        'NaturalGas',
        'Beef',
        'Lamb',
        'Chicken',
        'Pork',
        'Milk',
        'Rice',
        'Potatoes',
        'Apple',
        'Bananas',
        'Oranges',
        'Coffee',
        'Tea',
        'Beer',
        'Wine',
        'Jeans',
        'Shoes',
        'Jacket'
    ]);

    const filteredData = dummyData.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const handleItemClick = (item: string) => {
        setSearchQuery(item);
        setShowDropdown(false);
    };

    function executePointFunction(userItem, userQuantity) {
        switch (userItem.toLowerCase()) {
            case 'car':
                return pointForCar(userQuantity);
            case 'heavyvehicle':
                return pointForHeavyVehicle(userQuantity);
            case 'treeplantation':
                return pointForTreePlantation(userQuantity);
            case 'twovehicle':
                return pointForTwoVehicle(userQuantity);
            case 'walking':
                return pointForWalking(userQuantity);
            case 'flight':
                return pointForFlight(userQuantity);
            case 'publicbus':
                return pointForPublicBus(userQuantity);
            case 'train':
                return pointForTrain(userQuantity);
            case 'electricity':
                return pointForElectricity(userQuantity);
            case 'naturalgas':
                return pointForNaturalGas(userQuantity);
            case 'beef':
                return pointForBeef(userQuantity);
            case 'lamb':
                return pointForLamb(userQuantity);
            case 'chicken':
                return pointForChicken(userQuantity);
            case 'pork':
                return pointForPork(userQuantity);
            case 'milk':
                return pointForMilk(userQuantity);
            case 'rice':
                return pointForRice(userQuantity);
            case 'potatoes':
                return pointForPotatoes(userQuantity);
            case 'apple':
                return pointForApple(userQuantity);
            case 'bananas':
                return pointForBananas(userQuantity);
            case 'oranges':
                return pointForOranges(userQuantity);
            case 'coffee':
                return pointForCoffee(userQuantity);
            case 'tea':
                return pointForTea(userQuantity);
            case 'beer':
                return pointForBeer(userQuantity);
            case 'wine':
                return pointForWine(userQuantity);
            case 'jeans':
                return pointForJeans(userQuantity);
            case 'shoes':
                return pointForShoes(userQuantity);
            case 'jacket':
                return pointForJacket(userQuantity);
            default:
                throw new Error(`Function pointFor${userItem} does not exist.`);
        }
    }

    const handleSubmit = async () => {
        const pointValue = executePointFunction(searchQuery, quantity);

        const token = localStorage.getItem('token');
        if (!token) {
            alert('User is not authenticated.');
            return;
        }

        try {
            const decodedToken = jwtDecode<DecodedToken>(token);
            const userId = decodedToken.userId;

            if (searchQuery === '' || quantity === '') {
                alert('Please fill in all fields.');
                return;
            }

            const response = await axios.post(
                'http://localhost:5000/api/v1/points',
                {
                    createdBy: userId,
                    name: searchQuery,
                    pointValue,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log('Response:', response.data);
            // Clear input fields after successful submission
            setSearchQuery('');
            setQuantity('');
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <div className="mb-3 mt-5 md:w-96">
            <div className="mb-5 flex flex-wrap items-stretch">
                <div className="font-bold mr-2">Add Your Footprint</div>
                <div className="relative flex">
                    <input
                        type="search"
                        className="relative flex-auto rounded-l border border-solid border-black bg-transparent bg-clip-padding px-3 py-[0.5rem] text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-black focus:text-bl-400 focus:shadow-[inset_0_0_0_1px_rgb(59,202,113)] focus:outline-none dark:border-black dark:text-black dark:placeholder:text-black dark:focus:border-black"
                        placeholder="Item"
                        aria-label="Item"
                        aria-describedby="button-addon1"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setShowDropdown(true);
                        }}
                        onBlur={() => setShowDropdown(false)}
                    />
                    <div className="ml-2">
                        <input
                            type="number"
                            min="0"
                            placeholder="Quantity"
                            className="relative block rounded-l border border-solid border-black bg-transparent bg-clip-padding px-3 py-[0.5rem] text-base font-normal leading-[1.6] text-blue-400 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-black focus:text-bl-400 focus:shadow-[inset_0_0_0_1px_rgb(59,202,113)] focus:outline-none dark:border-black dark:text-black dark:placeholder:text-black dark:focus:border-black"
                            aria-label="Quantity"
                            aria-describedby="button-addon1"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                    </div>
                    <TERipple color="light">
                        <button
                            type="button"
                            className="relative z-[2] flex items-center rounded-r px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 "
                            id="button-addon1"
                            onClick={handleSubmit}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10,20A10,10,0,1,0,0,10,10,10,0,0,0,10,20ZM8.711,4.3l5.7,5.766L8.7,15.711,7.3,14.289l4.289-4.242L7.289,5.7Z" />
                                <path
                                    fillRule="evenodd"
                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </TERipple>
                </div>
            </div>
            {showDropdown && (
                <div className="absolute z-[999] mt-1 w-half bg-white border border-gray-300 rounded-md shadow-lg">
                    <ul className="py-1">
                        {filteredData.map(item => (
                            <li
                                key={item}
                                className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
                                onMouseDown={() => handleItemClick(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchBasicExample;
