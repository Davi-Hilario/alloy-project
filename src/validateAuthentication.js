function doesTokenExists() {
	return sessionStorage.length !== 0 && sessionStorage.TOKEN !== "";
}

export default doesTokenExists;
