FROM pierrezemb/gostatic

COPY ./dist/ /srv/http/

ENTRYPOINT ["/goStatic", "-port", "8081", "-fallback", "/index.html"]