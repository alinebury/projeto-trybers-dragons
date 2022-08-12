import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private static rangerCount = 0;
  private _energy: EnergyType = 'stamina';

  constructor(name: string) { 
    super(name);
    Ranger.rangerCount += 1;
  }
  
  static createdArchetypeInstances(): number {
    return this.rangerCount;
  }

  get energyType(): EnergyType { return this._energy; }
}