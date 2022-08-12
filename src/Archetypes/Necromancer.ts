import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private static necromancerCount = 0;
  private _energy: EnergyType = 'mana';

  constructor(name: string) { 
    super(name);
    Necromancer.necromancerCount += 1;
  }
  
  static createdArchetypeInstances(): number {
    return this.necromancerCount;
  }

  get energyType(): EnergyType { return this._energy; }
}