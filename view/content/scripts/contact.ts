namespace core {
    export class Contact {
        private _fullName: string;
        private _contactNumber: string;
        private _emailAddress: string;

        constructor(fullName: string = "", contactNumber: string = "", emailAddress: string = "") {
            this._fullName = fullName;
            this._contactNumber = contactNumber;
            this._emailAddress = emailAddress;
        }

        get fullName(): string {
            return this._fullName;
        }

        set fullName(value: string) {
            this._fullName = value;
        }

        get contactNumber(): string {
            return this._contactNumber;
        }

        set contactNumber(value: string) {
            this._contactNumber = value;
        }

        get emailAddress(): string {
            return this._emailAddress;
        }

        set emailAddress(value: string) {
            this._emailAddress = value;
        }

        toString(): string {
            return `FullName: ${this._fullName}\nContactNumber: ${this._contactNumber}\nEmailAddress: ${this._emailAddress}\n`;
        }

        serialize(): string | null {
            if (this._fullName !== "" && this._contactNumber !== "" && this._emailAddress !== "") {
                return `${this._fullName},${this._contactNumber},${this._emailAddress}`;
            }

            console.error("One or more properties of the Contact are empty or invalid");
            return null;
        }

        deserialize(data: string): void {
            const propertyArray: string[] = data.split(",");
            if (propertyArray.length === 3) {
                this._fullName = propertyArray[0].trim();
                this._contactNumber = propertyArray[1].trim();
                this._emailAddress = propertyArray[2].trim();
            } else {
                console.error("Invalid data format for deserialization");
            }
        }
    }
}
