import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private static warriorCount = 0;
  private _energy: EnergyType = 'stamina';

  constructor(name: string) { 
    super(name);
    Warrior.warriorCount += 1;
  }
  
  static createdArchetypeInstances(): number {
    return this.warriorCount;
  }

  get energyType(): EnergyType { return this._energy; }
}