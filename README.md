# Password Generator Starter Code

The challenge for this module was to create a password generater which could:   
  * Allow the user to dynamically select a pasword length between 8 and 128 inclusive
  * Allow the user to use lowercase characters, uppercase characters, numerical characters, special characters, and any combination thereof

Additional steps were taken to ensure values for password generation were as random as possible to increase security. Namely, using window.crypto.getRandomValues() rather than using Math.random(). Additionally, user input is sufficiently sanitized so as to prevent unexpected output given incorrect input. 

Deployed project link: https://mersant.github.io/Module3Challenge/

![image](https://user-images.githubusercontent.com/102173297/182998049-37229887-e58d-40d9-99bf-c4fa36dd92e7.png)
