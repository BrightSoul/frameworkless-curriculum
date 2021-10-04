export default /* html */`
    <style>
        :host {
            display: block;
            break-after: page;
            width: 210mm;
            height: 297mm;
            padding: 10mm;
            box-sizing: border-box;
        }

        :host>::slotted(*) {
            display: block;
        }

        @media only screen {
            :host {
                border: 1px solid gray;
                box-shadow: 2px 2px 2px #ccc;
                background-color: white;
                margin: auto;
                margin-bottom: 0.5rem;
            }
        }
    </style>
    <slot></slot>
`;
