FROM quay.io/suhailtechinfo/suhail-v2
RUN git clone github.com/xLordkayx/suhailmd-2.0 /root/SUHAIL-2.0
# RUN rm -rf /root/SUHAI-2.0/.git
WORKDIR /root/SUHAIL-2.0
RUN npm install || yarn install
EXPOSE 8000
CMD ["npm","start" ]
