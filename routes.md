## API WORKLY

####  `POST /user/`  [ Creazione profilo ] 

```javascript
// body of the request
{
    "nickname": string, // [REQUIRED]
    "description": string,
    "skills": string[], // [REQUIRED]
    "image": string, // nft imported by user
    "telegram": string, // telegram nick [REQUIRED]
    "discrod: string, // discord nick
    "certifications": [{
        "name": string,
        "year": number
    }],
    "preferred-work": string, // local or remote ( user prefer to work from remote place or in the same place of the work )
}
```