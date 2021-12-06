namespace GM_Types {
  type ValueChangeListener = (
    name: string,
    oldValue: unknown,
    newValue: unknown,
    remote: boolean
  ) => unknown;

  interface OpenTabOptions {
    active?: boolean;
    insert?: boolean;
    setParent?: boolean;
  }

  interface XHRResponse<CONTEXT_TYPE> extends Function {
    DONE: 4;
    HEADERS_RECEIVED: 2;
    LOADING: 3;
    OPENED: 1;
    UNSENT: 0;

    context: CONTEXT_TYPE;
    finalUrl: string;
    readyState: 0 | 1 | 2 | 3 | 4;
    responseHeaders: string;
    status: number;
    statusText: string;
    response: string | null;
    responseText: string;
    responseXML: Document | null;
  }

  interface XHRProgress<CONTEXT_TYPE> extends XHRResponse<CONTEXT_TYPE> {
    done: number;
    lengthComputable: boolean;
    loaded: number;
    position: number;
    total: number;
    totalSize: number;
  }

  type Listener<OBJ> = (this: OBJ, event: OBJ) => unknown;

  interface XHRDetails<CONTEXT_TYPE> {
    method?: "GET" | "HEAD" | "POST";
    url?: string;
    headers?: { readonly [key: string]: string };
    data?: string;
    binary?: boolean;
    timeout?: number;
    context?: CONTEXT_TYPE;
    responseType?: "arraybuffer" | "blob" | "json";
    overrideMimeType?: string;
    anonymous?: boolean;
    fetch?: boolean;
    username?: string;
    password?: string;

    onload?: Listener<XHRResponse<CONTEXT_TYPE>>;
    onloadstart?: Listener<XHRResponse<CONTEXT_TYPE>>;
    onprogress?: Listener<XHRProgress<CONTEXT_TYPE>>;
    onreadystatechange?: Listener<XHRResponse<CONTEXT_TYPE>>;
    ontimeout?: Listener<Function>;
    onabort?: Function;
    onerror?: Function;
  }

  interface AbortHandle<RETURN_TYPE> {
    abort(): RETURN_TYPE;
  }

  interface DownloadError {
    error:
      | "not_enabled"
      | "not_whitelisted"
      | "not_permitted"
      | "not_supported"
      | "not_succeeded";
    details?: string;
  }

  interface DownloadDetails {
    url: string;
    name: string;
    headers?: { readonly [key: string]: string };
    saveAs?: boolean;
    timeout?: number;
    onerror?: Listener<DownloadError>;
    ontimeout?: Listener<object>;
    onload?: Listener<object>;
    onprogress?: Listener<XHRProgress<void>>;
  }

  interface NotificationThis extends NotificationDetails {
    id: string;
  }

  type NotificationOnClick = (this: NotificationThis) => unknown;
  type NotificationOnDone = (this: NotificationThis, clicked: boolean) => unknown;

  interface NotificationDetails {
    text?: string;
    title?: string;
    image?: string;
    highlight?: boolean;
    timeout?: number;
    onclick?: NotificationOnClick;
    ondone?: NotificationOnDone;
  }
}
declare global {
  function GM_xmlhttpRequest<CONTEXT_TYPE>(
    details: GM_Types.XHRDetails<CONTEXT_TYPE>
  ): GM_Types.AbortHandle<void>;
}

export {};
