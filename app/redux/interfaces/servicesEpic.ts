import IBreweryRepository from "@Services/repositories/IBreweryRepository";

export default interface ServicesEpic {
    breweryRepository: IBreweryRepository,
};
