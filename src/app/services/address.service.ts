import { Injectable } from "@angular/core";
import { sample_addresses } from "../data";
import { Address } from "../models/address.model";

@Injectable({
    providedIn: 'root'
  })
export class AddressService{
    
  getAllAddresses(): Address[]{
      return sample_addresses;
  }

  getAddressById(addressId:number):Address{
      return this.getAllAddresses().find(address => address.id == addressId) ?? new Address();
    }

  saveAddress(newAddress: Address) {
    if(newAddress.code !== ''){
      sample_addresses.push(newAddress)
    }
  }

  findLastId(){
    let lastAddress = sample_addresses[sample_addresses.length-1]
    let newId = lastAddress.id
    return newId + 1
  }
    
}