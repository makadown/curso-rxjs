import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dui elit. Integer mattis mauris erat, a cursus quam lacinia vitae. Phasellus eu sapien mauris. Sed eu ligula ut ipsum laoreet sollicitudin a ac enim. Donec dignissim dui sed arcu vulputate interdum. Phasellus sollicitudin et sapien id pharetra. Integer ut nibh lacus. In eget nisl sit amet sem vestibulum sagittis a ac ex. Mauris tempus mi massa, ut placerat tortor tincidunt quis.
<br/><br/>
Ut sed dolor faucibus, ornare velit at, feugiat elit. Nam quis dolor ac nulla pulvinar pretium. Suspendisse tincidunt est ut odio iaculis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at nibh fermentum, venenatis dui non, interdum lacus. Pellentesque id quam vitae erat placerat aliquet. Duis eget consequat enim, quis scelerisque tortor. Sed hendrerit venenatis finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam porta diam in auctor ornare. Pellentesque ornare velit mauris, in euismod sem fringilla id. Sed id posuere erat, ut tempus neque. Suspendisse quis velit mauris.
<br/><br/>
Proin et lacinia libero, at tincidunt dui. Quisque molestie eros eu nisi finibus sodales. Cras ut condimentum urna, quis convallis ante. Integer sit amet gravida purus. Vivamus accumsan lobortis nisi. Pellentesque eget mattis elit, ut maximus nibh. Maecenas tristique, sapien at viverra pulvinar, velit ligula eleifend quam, non pretium libero justo sed lorem. Pellentesque posuere et ligula et elementum. Duis felis quam, elementum ac lobortis sed, scelerisque eget lorem. Integer viverra massa luctus, auctor nunc at, facilisis leo.
<br/><br/>
Etiam molestie lectus lectus, eget euismod dui sollicitudin ac. Integer libero lorem, lacinia eu convallis ac, consectetur eu quam. Ut molestie felis ac molestie mollis. Sed dignissim vitae sapien suscipit tincidunt. Pellentesque venenatis nisl sed dapibus iaculis. Nam eu semper massa. Suspendisse laoreet auctor urna, vel laoreet sem. Curabitur est nibh, mollis at porta vitae, tristique et risus. Sed sodales ex tortor, et vestibulum massa ultrices non. Curabitur condimentum justo eget justo aliquam, ut aliquam sem sodales. Sed tincidunt malesuada est, vitae finibus metus tincidunt at. Integer varius laoreet velit, nec aliquam risus malesuada in. Nulla eget mattis libero, id ornare orci. Quisque ultrices ultrices viverra. Nullam dictum felis metus. Sed ultrices ullamcorper leo, eu porttitor magna consectetur sit amet.
<br/><br/>
Vestibulum bibendum sapien lacinia felis accumsan, vitae aliquam elit tempor. Donec diam tortor, luctus ultrices ligula quis, ullamcorper consequat metus. Duis venenatis maximus orci, vitae faucibus diam pretium at. Vivamus libero leo, vehicula quis elit at, condimentum posuere ante. Nunc scelerisque consectetur quam eget egestas. Cras ac urna at dui auctor finibus. Proin eget sodales lacus.
<br><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dui elit. Integer mattis mauris erat, a cursus quam lacinia vitae. Phasellus eu sapien mauris. Sed eu ligula ut ipsum laoreet sollicitudin a ac enim. Donec dignissim dui sed arcu vulputate interdum. Phasellus sollicitudin et sapien id pharetra. Integer ut nibh lacus. In eget nisl sit amet sem vestibulum sagittis a ac ex. Mauris tempus mi massa, ut placerat tortor tincidunt quis.
<br/><br/>
Ut sed dolor faucibus, ornare velit at, feugiat elit. Nam quis dolor ac nulla pulvinar pretium. Suspendisse tincidunt est ut odio iaculis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at nibh fermentum, venenatis dui non, interdum lacus. Pellentesque id quam vitae erat placerat aliquet. Duis eget consequat enim, quis scelerisque tortor. Sed hendrerit venenatis finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam porta diam in auctor ornare. Pellentesque ornare velit mauris, in euismod sem fringilla id. Sed id posuere erat, ut tempus neque. Suspendisse quis velit mauris.
<br/><br/>
Proin et lacinia libero, at tincidunt dui. Quisque molestie eros eu nisi finibus sodales. Cras ut condimentum urna, quis convallis ante. Integer sit amet gravida purus. Vivamus accumsan lobortis nisi. Pellentesque eget mattis elit, ut maximus nibh. Maecenas tristique, sapien at viverra pulvinar, velit ligula eleifend quam, non pretium libero justo sed lorem. Pellentesque posuere et ligula et elementum. Duis felis quam, elementum ac lobortis sed, scelerisque eget lorem. Integer viverra massa luctus, auctor nunc at, facilisis leo.
<br/><br/>
Etiam molestie lectus lectus, eget euismod dui sollicitudin ac. Integer libero lorem, lacinia eu convallis ac, consectetur eu quam. Ut molestie felis ac molestie mollis. Sed dignissim vitae sapien suscipit tincidunt. Pellentesque venenatis nisl sed dapibus iaculis. Nam eu semper massa. Suspendisse laoreet auctor urna, vel laoreet sem. Curabitur est nibh, mollis at porta vitae, tristique et risus. Sed sodales ex tortor, et vestibulum massa ultrices non. Curabitur condimentum justo eget justo aliquam, ut aliquam sem sodales. Sed tincidunt malesuada est, vitae finibus metus tincidunt at. Integer varius laoreet velit, nec aliquam risus malesuada in. Nulla eget mattis libero, id ornare orci. Quisque ultrices ultrices viverra. Nullam dictum felis metus. Sed ultrices ullamcorper leo, eu porttitor magna consectetur sit amet.
<br/><br/>
Vestibulum bibendum sapien lacinia felis accumsan, vitae aliquam elit tempor. Donec diam tortor, luctus ultrices ligula quis, ullamcorper consequat metus. Duis venenatis maximus orci, vitae faucibus diam pretium at. Vivamus libero leo, vehicula quis elit at, condimentum posuere ante. Nunc scelerisque consectetur quam eget egestas. Cras ac urna at dui auctor finibus. Proin eget sodales lacus.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dui elit. Integer mattis mauris erat, a cursus quam lacinia vitae. Phasellus eu sapien mauris. Sed eu ligula ut ipsum laoreet sollicitudin a ac enim. Donec dignissim dui sed arcu vulputate interdum. Phasellus sollicitudin et sapien id pharetra. Integer ut nibh lacus. In eget nisl sit amet sem vestibulum sagittis a ac ex. Mauris tempus mi massa, ut placerat tortor tincidunt quis.
<br/><br/>
Ut sed dolor faucibus, ornare velit at, feugiat elit. Nam quis dolor ac nulla pulvinar pretium. Suspendisse tincidunt est ut odio iaculis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at nibh fermentum, venenatis dui non, interdum lacus. Pellentesque id quam vitae erat placerat aliquet. Duis eget consequat enim, quis scelerisque tortor. Sed hendrerit venenatis finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam porta diam in auctor ornare. Pellentesque ornare velit mauris, in euismod sem fringilla id. Sed id posuere erat, ut tempus neque. Suspendisse quis velit mauris.
<br/><br/>
Proin et lacinia libero, at tincidunt dui. Quisque molestie eros eu nisi finibus sodales. Cras ut condimentum urna, quis convallis ante. Integer sit amet gravida purus. Vivamus accumsan lobortis nisi. Pellentesque eget mattis elit, ut maximus nibh. Maecenas tristique, sapien at viverra pulvinar, velit ligula eleifend quam, non pretium libero justo sed lorem. Pellentesque posuere et ligula et elementum. Duis felis quam, elementum ac lobortis sed, scelerisque eget lorem. Integer viverra massa luctus, auctor nunc at, facilisis leo.
<br/><br/>
Etiam molestie lectus lectus, eget euismod dui sollicitudin ac. Integer libero lorem, lacinia eu convallis ac, consectetur eu quam. Ut molestie felis ac molestie mollis. Sed dignissim vitae sapien suscipit tincidunt. Pellentesque venenatis nisl sed dapibus iaculis. Nam eu semper massa. Suspendisse laoreet auctor urna, vel laoreet sem. Curabitur est nibh, mollis at porta vitae, tristique et risus. Sed sodales ex tortor, et vestibulum massa ultrices non. Curabitur condimentum justo eget justo aliquam, ut aliquam sem sodales. Sed tincidunt malesuada est, vitae finibus metus tincidunt at. Integer varius laoreet velit, nec aliquam risus malesuada in. Nulla eget mattis libero, id ornare orci. Quisque ultrices ultrices viverra. Nullam dictum felis metus. Sed ultrices ullamcorper leo, eu porttitor magna consectetur sit amet.
<br/><br/>
Vestibulum bibendum sapien lacinia felis accumsan, vitae aliquam elit tempor. Donec diam tortor, luctus ultrices ligula quis, ullamcorper consequat metus. Duis venenatis maximus orci, vitae faucibus diam pretium at. Vivamus libero leo, vehicula quis elit at, condimentum posuere ante. Nunc scelerisque consectetur quam eget egestas. Cras ac urna at dui auctor finibus. Proin eget sodales lacus.`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight) ) * 100;
};

const scroll$ = fromEvent(document, 'scroll');

const progreso$ = scroll$.pipe(
   // map ( event => calcularPorcentajeScroll(event) )
   map ( calcularPorcentajeScroll ),
   tap( console.log )
);

progreso$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
})