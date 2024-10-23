import { useState } from "react"
import { VALUES_LIST } from "../utils/helper";
import { toast, ToastContainer } from "react-toastify";

const PasswordGenerator = () => {
    
    const dataObj = {
        noOfLetter: "",
        uppercase: false,
        lowercase: false,
        number: false,
        symbols: false,
    }

    const [value, setValue] = useState(dataObj);

    const [generatedPassword, setGeneratedPassword] = useState("");

    const isValidNoOfLetters = value.noOfLetter && parseInt(value.noOfLetter) > 0;

    const generatePassword = () => {
        let passwordArray = [];

        if (isValidNoOfLetters) {
            if (value.uppercase) {
                let randomUppercaseLetters = VALUES_LIST.map((obj) =>
                    obj.upperCaseLetters.sort(() => 0.5 - Math.random()).slice(0, value.noOfLetter)
                );
                passwordArray = [...passwordArray, ...randomUppercaseLetters];
            }
            if (value.lowercase) {
                let randomLowercaseLetters = VALUES_LIST.map((obj) =>
                    obj.lowerCaseLetters.sort(() => 0.5 - Math.random()).slice(0, value.noOfLetter)
                );
                passwordArray = [...passwordArray, ...randomLowercaseLetters];
            }
            if (value.number) {
                let randomNumbers = VALUES_LIST.map((obj) =>
                    obj.numbers.sort(() => 0.5 - Math.random()).slice(0, value.noOfLetter)
                );
                passwordArray = [...passwordArray, ...randomNumbers];
            }
            if (value.symbols) {
                let randomSymbols = VALUES_LIST.map((obj) =>
                    obj.symbols.sort(() => 0.5 - Math.random()).slice(0, value.noOfLetter)
                );
                passwordArray = [...passwordArray, ...randomSymbols];
            }
        }

        return passwordArray.slice(1, value.noOfLetter).join('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let mixConditon = value.uppercase || value.lowercase || value.number || value.symbols;
        if (isValidNoOfLetters && mixConditon) {
            const generatedPwd = generatePassword();
            setGeneratedPassword(generatedPwd);
        } else {
            toast.warning("Please Enter the No of Letter of Password")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-[500px]">
            <p className="text-3xl mb-8">Here's Your Password: {generatedPassword}</p>
            <div className="flex items-center justify-between">
                <p>Number of Character in Password:</p>
                <input
                    placeholder="Don't type Just use Up and Down Key"
                    value={value.noOfLetter}
                    onChange={(e) => setValue({ ...value, noOfLetter: e.target.value })}
                    type="number"
                    max={20}
                    min={1}
                />
            </div>
            <div className="flex items-center justify-between">
                <p>Include UpperCase Letters:</p>
                <input
                    type="checkbox"
                    onChange={(e) => setValue({ ...value, uppercase: e.target.checked })}
                />
            </div>
            <div className="flex items-center justify-between">
                <p>Include LowerCase Letters:</p>
                <input
                    type="checkbox"
                    onChange={(e) => setValue({ ...value, lowercase: e.target.checked })}
                />
            </div>
            <div className="flex items-center justify-between">
                <p>Include Numbers:</p>
                <input
                    type="checkbox"
                    onChange={(e) => setValue({ ...value, number: e.target.checked })}
                />
            </div>
            <div className="flex items-center justify-between">
                <p>Include Symbols:</p>
                <input
                    type="checkbox"
                    onChange={(e) => setValue({ ...value, symbols: e.target.checked })}
                />
            </div>
            <button type="submit" className="p-2 bg-green-600 rounded-lg mt-3">Generate Password</button>
            <ToastContainer />
        </form>
    )
}

export default PasswordGenerator;
