## API WORKLY

#### Creazione profilo `/user/ [POST]` 

##### BODY

```
{
    "nickname": string,
    "description": string,
    "skills": string[],
    "image": string, // nft imported by user
    "telegram": string, // telegram nick
    "discrod: string, // discord nick
    "certifications": [{
        "name": string,
        "year": number
    }],
    "preferred-work": string, // local or remote ( user prefer to work from remote place or in the same place of the work )
}
```