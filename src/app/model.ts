export default class UserDataModel {
    private userData: { [key: string]: { firstName: string; lastName: string } } = {};

    getFirstName(): string {
        return this.userData['RssPuzzle'] ? this.userData['RssPuzzle'].firstName : '';
    }

    getLastName(): string {
        return this.userData['RssPuzzle'] ? this.userData['RssPuzzle'].lastName : '';
    }

    setFirstName(firstName: string): void {
        this.userData['RssPuzzle'] = {
            ...this.userData['RssPuzzle'],
            firstName: firstName,
        };
    }

    setLastName(lastName: string): void {
        this.userData['RssPuzzle'] = {
            ...this.userData['RssPuzzle'],
            lastName: lastName,
        };
    }

    saveToLocalStorage(): void {
        localStorage.setItem('RssPuzzle', JSON.stringify(this.userData));
    }

    retrieveFromLocalStorage(): void {
        const storedUserData = localStorage.getItem('RssPuzzle');

        if (storedUserData) {
            this.userData = JSON.parse(storedUserData);
        }
    }
}