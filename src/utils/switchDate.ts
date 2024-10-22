
export const getActivityLevelValue = (level: string): string => {
    switch (level) {
      case 'ONE':
        return '1';
      case 'TWO':
        return '2';
      case 'THREE':
        return '3';
      case 'FOUR':
        return '4';
      case 'FIVE':
        return '5';
      default:
        return '';
    }
  };
  export const getBloodValue = (blood: string): string => {
    switch (blood) {
      case 'FIRST_1':
        return '1';
      case 'SECOND_2':
        return '2';
      case 'THIRD_3':
        return '3';
      case 'FOURTH_4':
        return '4';
      default:
        return '';
    }
  };
  
  
 export  const getSexValue = (sex: string): string => {
    switch (sex) {
      case 'MALE':
        return 'Male';
      case 'FEMALE':
        return 'Female';
      default:
        return '';
    }
  };


  export const getBloodKey = (blood: string) => {
    switch (blood) {
        case '1': return 'FIRST_1';
        case '2': return 'SECOND_2';
        case '3': return 'THIRD_3';
        case '4': return 'FOURTH_4';
        default: return '';
    }
};

export const getSexKey = (sex: string) => {
    switch (sex) {
        case 'Male': return 'MALE';
        case 'Female': return 'FEMALE';
        default: return '';
    }
};

export const getActivityLevelKey = (activity: string) => {
    switch (activity) {
        case '1': return 'ONE';
        case '2': return 'TWO';
        case '3': return 'THREE';
        case '4': return 'FOUR';
        case '5': return 'FIVE';
        default: return '';
    }
};