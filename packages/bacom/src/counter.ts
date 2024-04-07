import { comp, elem, event, prop } from "bacom";
import template from "./counter.html";
import style from "./counter.css";

@comp({ tag: "my-counter", styles: [style], template })
export class Counter extends HTMLElement {
    @prop({ type: "number" })
    public count: number = 0;

    @elem()
    private counter: HTMLElement
  
    @event({ sel: "button:first-of-type" })
    onDecClick(): void {
        this.#update(--this.count);
    }

    @event({ sel: "button:last-of-type" })
    onIncClick(): void {
        this.#update(++this.count);
    }

    createdCallback(): void {
        this.#update(this.count);
    }

    attributeChangedCallback(_name: string, _oldValue: string, _newValue: string): void {
        this.#update(this.count);
    }

    #update(count: number) {
        this.counter.textContent = String(count);
    }
  }
