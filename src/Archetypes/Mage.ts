import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private static mageCount = 0;
  private _energy: EnergyType = 'mana';

  constructor(name: string) { 
    super(name);
    Mage.mageCount += 1;
  }
  
  static createdArchetypeInstances(): number {
    return this.mageCount;
  }

  get energyType(): EnergyType { return this._energy; }
}