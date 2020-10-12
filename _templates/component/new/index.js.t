---
to: src/<%= category %>/<%= section %>/<%= name %>/index.js
---
<% const comp = name -%>

import { <%= comp %> } from './<%= comp %>'

export { <%= comp %> }
