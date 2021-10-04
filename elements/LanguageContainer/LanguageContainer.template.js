export default /* html */`
    <style>
        [data-container] {
            border: 1px solid black;
            border-radius: 0.5em;
            overflow:hidden;
        }
        table {
            width: 100%;
        }
        td, th {
            text-align: center;
        }
        td {
            font-size: 0.8em;
            width: 17%;
        }
        [data-language-col] {
            width: 15%;
        }
    </style>
    <div data-container>
        <table>
            <thead>
                <tr>
                    <th data-language-col></th>
                    <th colspan="2" data-col>Comprehension</th>
                    <th colspan="2" data-col>Speaking</th>
                    <th data-half-col>Writing</th>
                </tr>
                <tr>
                    <td data-language-col></td>
                    <td>Listening</td>
                    <td>Reading</td>
                    <td>Interaction</td>
                    <td>Production</td>
                    <td></td>
                </tr>
            </thead>
        </table>
        <slot></slot>
    </div>
`;
