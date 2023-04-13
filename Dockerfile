FROM amazoncorretto:11-alpine-jdk
COPY target/*.jar *.jar
#ENTRYPOINT ["java","-jar","/app.jar"]
cmd java -jar *.jar
