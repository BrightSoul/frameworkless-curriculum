export default /* html */`
    <style>
        :host {
            margin-bottom: 0;
        }
        .person-info {
            display: flex;
            margin-bottom: 0;
            padding-bottom: 0;
        }
        [data-picture] {
            width: 40mm;
            height: 46mm;
            object-fit: cover;
            object-position: center center;
            display: block;
            margin-right: 5mm;
            flex-grow: 0;
            flex-shrink: 0;
            margin-bottom: 2mm;
        }
        [data-header] {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
        [data-header] i {
            margin-left: 5mm;
        }
        :host [data-header] h1 {
            margin: 0;
            line-height: 6mm;
        }
        :host [data-header] span {
            font-size: 0.95em;
        }
        [data-role] {
            margin-top: 3mm;
            margin-bottom: 5.2mm;
        }
        p {
            margin: 0;
        }
    </style>
    <div class="person-info">
        <img data-picture>
        <div>
            <div data-header>
                <h1 data-name></h1>
                <span>
                    <i class="fas fa-birthday-cake"></i>
                    <span data-birthday></span>
                    <i class="fas fa-map-marker"></i>
                    <span data-location></span>
                </span>
            </div>
            <h2 data-role></h2>
            <p><slot></slot></p>
        </div>
    </div>
`;
