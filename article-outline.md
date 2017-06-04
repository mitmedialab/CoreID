Placeholder for short article or post by Christian Smith and Dazza Greenwood.

## Basic Ideas

* from identity to trust
* engineering incentives for good behavior and disincentives for bad behavior
* mapping technical functions to legal roles and back on business, legal, and technical dimensions

## Use Cases

- selling a book on Amazon
- buying real estate in Boston
- buying a car in Boston
- getting access to documents in Evernote or Dropbox

## Mapping Legal Roles to Functions

### Cast
  * Alice
  * Bob
  * Charlie

### Agency-Law triangle
  - principle
  - agent / fiduciary
  - third-party / counterparty
	
### "OAuth" triangle roles
  - subject/resource-owner
  - relying party
  - identity provider / authorization server
  - protected resource server
  - User agent

## Dazza's Crucible

| UML/Tech System | Legal/Business System |
|-----------------|-----------------------|
| Actors          | Roles                 |
| Actions         | Transaction           |
| Objects         | Data                  |
| Systems         | Systems               |
| Admin           | Ownership/Property    |

## Progression of Technologies

* Yesterday: OAuth – resource owner delegates access to third party app via authorization server
* Today: OIDC – relying party delegates authentication to federated identity provider
* Tomorrow: Decentralized Identity – Credentials established by subject/user; blockchain backed individually owned identity

## Terminology

* Resource Owner/Subject
* Identity Provider/Authorization Server
* Relying Party/Client
* Protected Resource Server / Resource Service Provider

## Parking Lot of Bullet Points:

* Mapping Legal/Business Roles to Technical Roles and referencing the corresponding functions for each role
* Mapping Roles to a core function of a next-gen "node" that enables individuals to own/control identity and personal data
* Playing through a basic common ordinary normal everyday use case to reference the roles, transactions, data and ownership facets of the use case with ref to OAuth2, OIDC, SAML, XACML, RBAC, PKI, etc and Wallet Public Key bound to for instance Credit Union or other role binding public key to legal identity (via KYC for example)
* identity and proof of identity are two different things
* blockchain useful for verification of public key ownership where disputed
* digital/electronic notary concept
* valid blockchain uses:
  * timestamping
  * key ownership non-repudiation ("I never signed that")
* "bank statement" of all the transactions a person has done
* "crowd notarization"?
* Pairwise pseudonymous identifiers as an important capability of verifier of claims 

## Potential References

* Electronic Notarization White Paper
* CARAT Guidelines
* UETA and ESIGN

# TODO

* [x] This list is coming from notes that Christian took during our District Hall Saturday jam session on this article.
* [ ] identify/experiment with possible legal role -> technical function mappings combinatorially (3 * 3 * 3)
* [ ] eliminate implausible combinations
* [ ] cluster equivalent combinations
* [ ] also map to
  * [ ] Contract law
  * [ ] consumer law
* [ ] identify core use case that will play through the article
* [ ] remember the second and third best use case candidates and make occasional reference
