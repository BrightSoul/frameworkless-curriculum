export default /* html */`
    <style>
        :host {
            font-size: 0.9em;
            display: block;
            padding-top: 1mm;
            padding-bottom: 4mm;
            padding-left: 2mm;
        }
        .fa-tag {
            font-size: 0.7em;
            margin-right: 1mm;
        }
    </style>
    <div><i class="fas fa-tag"></i><slot></slot></div>
`;
