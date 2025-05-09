const saveServiceToLocalStorage = (service) => {
    const existingServices = JSON.parse(localStorage.getItem("services")) || [];
    const updatedServices = [...existingServices, service];
    localStorage.setItem("services", JSON.stringify(updatedServices));
}
const getServicesFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("services")) || [];
}
const removeServiceFromLocalStorage = (serviceId) => {
    const existingServices = JSON.parse(localStorage.getItem("services")) || [];
    const updatedServices = existingServices.filter(service => service.id !== serviceId);
    localStorage.setItem("services", JSON.stringify(updatedServices));
}

export { saveServiceToLocalStorage, getServicesFromLocalStorage, removeServiceFromLocalStorage };