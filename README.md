# module
module test

https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/

Muss noch ausgebaut werden.

Idee mehr im html file machen was auch mit html zu tun hat.

<!doctype html>
<script type="module">
  import {sayHi} from './say.js';

  document.body.innerHTML = sayHi('John');
</script>
