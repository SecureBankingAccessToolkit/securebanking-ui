#Variables:
PASSWORD=changeit
DOMAIN=dev.forgerock.financial

FOLDER_CA=ca/obri

FOLDER_CERTS=securebanking-ui

#Default key parameters

TRANSPORT_KEY_ALGO=RSA
TRANSPORT_KEY_SIZE=2048
TRANSPORT_KEY_SIGNING_ALGO=SHA256withRSA

SIGNING_KEY_ALGO=RSA
SIGNING_KEY_SIZE=2048
SIGNING_KEY_SIGNING_ALGO=SHA256withRSA

VALIDITY=825

#
# DNAME
#
FORGEROCK_OU=forgerock.financial
FORGEROCK_O=ForgeRock
FORGEROCK_L=Bristol
FORGEROCK_ST=Avon
FORGEROCK_C=UK

#
# CA
#
OBRI_INTERNAL_CA_ALIAS=obri-internal-ca
OBRI_INTERNAL_CA_CRT=$(FOLDER_CA)/obri-internal-ca.crt
OBRI_INTERNAL_CA_P12=$(FOLDER_CA)/obri-internal-ca.p12
OBRI_INTERNAL_CA_KEYSTORE=$(FOLDER_CA)/obri-internal-ca-keystore.jks
OBRI_INTERNAL_CA_DNAME='CN=$(OBRI_INTERNAL_CA_ALIAS),OU=$(FORGEROCK_OU),O=$(FORGEROCK_O),L=$(FORGEROCK_L),ST=$(FORGEROCK_ST),C=$(FORGEROCK_C)'

OBRI_EXTERNAL_CA_ALIAS=obri-external-ca
OBRI_EXTERNAL_CA_CRT=$(FOLDER_CA)/obri-external-ca.crt
OBRI_EXTERNAL_CA_P12=$(FOLDER_CA)/obri-external-ca.p12
OBRI_EXTERNAL_CA_KEYSTORE=$(FOLDER_CA)/obri-external-ca-keystore.jks
OBRI_EXTERNAL_CA_DNAME='CN=$(OBRI_EXTERNAL_CA_ALIAS),OU=$(FORGEROCK_OU),O=$(FORGEROCK_O),L=$(FORGEROCK_L),ST=$(FORGEROCK_ST),C=$(FORGEROCK_C)'

# JVM_TRUSTSTORE=${JAVA_HOME}/jre/lib/security/cacerts
KEYSTORE_CERTS="${FOLDER_CERTS}/keystore.jks"
#
# HOSTNAME
#
HOSTNAME_RCS_UI=rcs-ui.${DOMAIN}
HOSTNAME_SWAGGER_UI=swagger.${DOMAIN}
HOSTNAME_LOCALHOST=localhost
HOSTNAME_CERT_WILDCARD=wildcard.${DOMAIN}

# CN = Common Name
# OU = Organization Unit
# O  = Organization Name
# L  = Locality Name
# ST = State Name
# C  = Country (2-letter Country Code)
# E  = Email
# For server certificates, the Common Name (CN) must be the hostname
DNAME_CERT_WILDCART='CN=$(HOSTNAME_CERT_WILDCARD),OU=$(FORGEROCK_OU),O=$(FORGEROCK_O),L=$(FORGEROCK_L),ST=$(FORGEROCK_ST),C=$(FORGEROCK_C)'

#Makefile commands:

secure-banking-certs: clean \
        init-certs-folder \
        create-keystore \
        create-certs


#
# Clean
#
clean:
	# Remove common
	rm -rf ${FOLDER_CERTS}

init-certs-folder:
	# Generate common folder
	mkdir ${FOLDER_CERTS}

create-keystore:
	 #Import CA into common keystore
	keytool -importkeystore \
	-deststorepass $(PASSWORD) -destkeystore $(KEYSTORE_CERTS) \
	-srckeystore $(OBRI_INTERNAL_CA_P12) -srcstoretype PKCS12 -srcstorepass $(PASSWORD)
	 #Import External CA
	keytool -import -trustcacerts -noprompt -alias $(OBRI_EXTERNAL_CA_ALIAS) -file $(OBRI_EXTERNAL_CA_CRT) \
		-keystore $(KEYSTORE_CERTS) -storepass $(PASSWORD)

create-certs:
		$(eval SAN=dns:$(HOSTNAME_RCS_UI))
		$(eval SAN=$(SAN),dns:$(HOSTNAME_SWAGGER_UI))
		$(eval SAN=$(SAN),dns:$(HOSTNAME_LOCALHOST))

		$(call generate_secure-banking-ui-certs,$(HOSTNAME_CERT_WILDCARD),$(DNAME_CERT_WILDCART),\
		$(SAN),\
		$(KEYSTORE_CERTS),$(PASSWORD),$(FOLDER_CERTS))

define generate_secure-banking-ui-certs
	$(eval ALIAS=$(1))
	$(eval DNAME=$(2))
	$(eval SAN=$(3))
	$(eval KEYSTORE=$(4))
	$(eval PASSWORD=$(5))
	$(eval FOLDER=$(6))
	$(eval BROWSER_CERT=b-$(ALIAS).p12)

	@echo "Generate transport $(ALIAS) certificate"
	keytool -genkey -alias $(subst wildcard,*,$(ALIAS)) \
		-keyalg $(TRANSPORT_KEY_ALGO) -keysize $(TRANSPORT_KEY_SIZE) -sigalg $(TRANSPORT_KEY_SIGNING_ALGO) \
		-keypass $(PASSWORD) \
		-validity $(VALIDITY) -dname $(subst wildcard,*,$(DNAME)) \
		-ext SAN=$(SAN) \
		-keystore $(KEYSTORE) -storepass $(PASSWORD)

	@echo "Generate $(ALIAS) certificate signing request"
	keytool -certreq -alias $(subst wildcard,*,$(ALIAS)) -ext BC=ca:true \
		-keyalg $(TRANSPORT_KEY_ALGO) -keysize $(TRANSPORT_KEY_SIZE) -sigalg $(TRANSPORT_KEY_SIGNING_ALGO) \
		-validity $(VALIDITY) -file "$(FOLDER)/$(ALIAS).csr" \
		-ext SAN=$(SAN) \
		-keystore $(KEYSTORE) -storepass $(PASSWORD)

	@echo "Generate $(ALIAS) signed certificate with the CA"
	keytool -gencert -alias $(OBRI_INTERNAL_CA_ALIAS) \
		-validity $(VALIDITY) -sigalg $(TRANSPORT_KEY_SIGNING_ALGO) \
		-infile "$(FOLDER)/$(ALIAS).csr" -outfile "$(FOLDER)/$(ALIAS).crt" -rfc \
		-ext SAN=$(SAN) \
		-keystore $(KEYSTORE) -storepass $(PASSWORD)

	@echo "Import $(ALIAS) signed certificate into $(KEYSTORE)"
	keytool -import -trustcacerts -noprompt -alias $(subst wildcard,*,$(ALIAS)) \
		-file "$(FOLDER)/$(ALIAS).crt" \
		-ext SAN=$(SAN) \
		-keystore $(KEYSTORE) -storepass $(PASSWORD)

	@echo "Export $(ALIAS) private certificate for importing into a browser"
	keytool -importkeystore -srcalias $(subst wildcard,*,$(ALIAS)) \
		-srckeystore $(KEYSTORE) -srcstorepass $(PASSWORD) \
		-destkeystore "$(FOLDER)/$(BROWSER_CERT)" -deststorepass $(PASSWORD) \
		-deststoretype PKCS12

	@echo "Export $(ALIAS) certificate into .key"
	echo $(PASSWORD) > /tmp/pwd.txt
	openssl pkcs12 -in $(FOLDER)/$(BROWSER_CERT)  -nodes -nocerts -out $(FOLDER)/k-$(ALIAS).key -passin file:/tmp/pwd.txt
endef
