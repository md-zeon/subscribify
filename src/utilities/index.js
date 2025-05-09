import { toast } from "react-toastify";

const saveServiceToLocalStorage = (service) => {
    const existingServices = JSON.parse(localStorage.getItem("services")) || [];
    const serviceExists = existingServices.some(existingService => existingService.id === service.id);
    if (serviceExists) {
        toast.error("You have already subscribed to this service.");
        return;
    }
    const updatedServices = [...existingServices, service];
    localStorage.setItem("services", JSON.stringify(updatedServices));
    toast.success(`You have subscribed to ${service.name} service`);
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