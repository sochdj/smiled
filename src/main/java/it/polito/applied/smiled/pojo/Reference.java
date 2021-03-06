package it.polito.applied.smiled.pojo;

import it.polito.applied.smiled.pojo.scenario.Character;
import it.polito.applied.smiled.pojo.scenario.Scenario;
import it.polito.applied.smiled.pojo.user.User;

public class Reference {

	private String id;
	private String firstname;
	private String lastname;
	private String cover;
	private String type;
	
	private String email;
	
	public Reference(){
		
	}
	
	public Reference(User u){
		id=u.getId();
		firstname=u.getFirstName();
		lastname=u.getLastName();
		if(u.getProfile()!=null)
			cover=u.getProfile().getCoverPhoto();
		email=u.getEmail();
		type=u.getClass().getSimpleName();
	}

	public Reference(Character c) {
		id=c.getId();
		firstname=c.getName();
		cover=c.getCover();
		type=c.getClass().getSimpleName();
	}

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public String getCover() {
		return cover;
	}
	public void setCover(String cover) {
		this.cover = cover;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@Override
	public boolean equals(Object o){
	    
		
		/*Riteniamo due Reference uguali a patto che questi abbiamo lo stesso ID. Sono considerati alla stregua di puntatori che portano con se
		 * qualche informazione aggiuntiva.*/
		/*ATTENZIONE - utilizziamo questa equals per le contains in diversi aggiornamenti asincroni. Se modifichi l'equals verificare*/
		
		if (o instanceof Reference){
	      Reference r = (Reference) o;
	      
	      if(this.id!=null && r.getId()!=null)
	    	  if (this.id.equals(r.getId())) 
		         return true;
		}
		return false;
	      
	      
//	      if(this.email!=null){
//		      if( !this.email.equals(r.getEmail()))
//		    	  return false;
//	      }else
//	    	  return false;
//	      if(this.type!=null){
//		      if(!this.type.equals(r.getType()))
//		    	  return false;
//	      }else
//	    	  return false;
//	      
//	      
//	      if(this.cover!=null){
//		      if( !this.cover.equals(r.getCover()))
//		    	  return false;
//	      }
//	      if(this.firstname!=null){
//		      if( !this.firstname.equals(r.getFirstname()))
//		    	  return false;
//	      }
//	      if(this.lastname!=null){
//	    	  if( !this.lastname.equals(r.getLastname()))
//		    	  return false;  
//	      }
//	     
//	      
//	      return true;
//	    }
//	    return false;
	   
	}
	
}
