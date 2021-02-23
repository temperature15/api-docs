

## XML: `<Ring>`
The Ring verb is used to play ringing audio on a call.

### Attributes

| ATTRIBUTE | Description                                                                                            |
|:----------|:-------------------------------------------------------------------------------------------------------|
| duration  | (optional) How many seconds to play ringing on the call. Default value is 5. Range: decimal values between 0.1 - 86400.

### Callbacks Received

None


#### Example 1 of 1:  Ring Verb
This example shows how to use the Ring verb to play ringing audio on a call for 10 seconds.




```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <Ring duration="10" />
</Response>
```



#### Java

```java
// Coming soon
```



#### C-Sharp

```csharp
// Coming soon
```




#### Ruby

```ruby
require 'bandwidth'

include Bandwidth
include Bandwidth::Voice

response = Bandwidth::Voice::Response.new()
ring = Bandwidth::Voice::Ring.new({
    :duration => 10
})

response.push(ring)
puts response.to_bxml()
```



#### Python

```python
from bandwidth.voice.bxml.response import Response
from bandwidth.voice.bxml.verbs import Ring

ring = Ring(
    duration=10
)

response = Response()
response.add_verb(ring)

print(response.to_bxml())
```



#### NodeJS

```js
// Coming soon
```



#### PHP

```php
<?php

require "vendor/autoload.php";

$ring = new BandwidthLib\Voice\Bxml\Ring();
$ring->duration(10);

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($ring);

echo $response->toBxml();
```

