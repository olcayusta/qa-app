The OP asks:
> What is blob URL? Why is it used?

Blob is just byte sequence. Browsers recognize Blobs as byte streams. It is used to get byte stream from source.
According to [Mozilla's documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
> A Blob object represents a file-like object of immutable, raw data. Blobs represent data that isn't necessarily in a JavaScript-native format. The File interface is based on Blob, inheriting blob functionality and expanding it to support files on the user's system.

The OP asks:
> Can i make my own blob url on a server?

Yes you can there are several ways to do so for example try http://php.net/manual/en/function.ibase-blob-echo.php

Read more here:

* https://developer.mozilla.org/en-US/docs/Web/API/Blob
* http://www.w3.org/TR/FileAPI/#dfn-Blob
* https://url.spec.whatwg.org/#urls
