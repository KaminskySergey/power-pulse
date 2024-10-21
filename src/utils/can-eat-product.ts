import { BloodGroup } from "@/types/product";

interface GroupBloodNotAllowed {
    [key: string]: boolean; 
  }

export function canEatProduct(groupBloodNotAllowed: GroupBloodNotAllowed, bloodGroup: BloodGroup): boolean {
    const bloodGroupKey = bloodGroup.replace('FIRST_1', '1')
                                    .replace('SECOND_2', '2')
                                    .replace('THIRD_3', '3')
                                    .replace('FOURTH_4', '4');
    
    const isNotAllowed = groupBloodNotAllowed[bloodGroupKey];
    return !isNotAllowed;
  }