package it.polito.applied.smiled.pojo.scenario;

import it.polito.applied.smiled.dto.ScenarioDTO;
import it.polito.applied.smiled.pojo.CharacterReference;
import it.polito.applied.smiled.pojo.PostReference;
import it.polito.applied.smiled.pojo.Reference;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Scenario {
	@Id
	private String id;
	private String name;
	private Date startDate;
	private Date endDate;
	private Date creationDate;
	 
	private ScenarioStatus status;
	private History history;
	private String cover;
	
	private List<CharacterReference> characters;
	
	private List<PostReference> posts;
	
	private Reference teacherCreator;
	private List<Reference> attendees;
	private List<Reference> collaborators;
	private List<Reference> invited;
	
	/*TODO
	 * Valutare inizializzazione liste (fondemantale nel caso di operazioni in memoria, con aggiunta metodi add, remove dalle liste)*/
	
	public Scenario(){
	}
	
	public Scenario(ScenarioDTO s, Reference teacherCreator){
		name=s.getName();
		status=ScenarioStatus.CREATED_V1;
		history= s.getHistory();
		//cover=s.getCover();
		this.teacherCreator = teacherCreator;
		creationDate = new Date();
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public History getHistory() {
		return history;
	}

	public void setHistory(History history) {
		this.history = history;
	}

	public String getCover() {
		return cover;
	}

	public void setCover(String cover) {
		this.cover = cover;
	}

	

	public List<CharacterReference> getCharacters() {
		return characters;
	}

	public void setCharacters(List<CharacterReference> characters) {
		this.characters = characters;
	}

	public String getId() {
		return id;
	}

	
	public List<Reference> getAttendees() {
		return attendees;
	}

	public void setAttendees(List<Reference> attendees) {
		this.attendees = attendees;
	}

	public List<Reference> getCollaborators() {
		return collaborators;
	}

	public void setCollaborators(List<Reference> collaborators) {
		this.collaborators = collaborators;
	}

	public Reference getTeacherCreator() {
		return teacherCreator;
	}

	public void setTeacherCreator(Reference teacherCreator) {
		this.teacherCreator = teacherCreator;
	}

	public ScenarioStatus getStatus() {
		return status;
	}

	public void setStatus(ScenarioStatus status) {
		this.status = status;
	}

	public Date getCreationDate() {
		return creationDate;
	}

	public List<PostReference> getPosts() {
		return posts;
	}

	public void setPosts(List<PostReference> posts) {
		this.posts = posts;
	}

	public List<Reference> getInvited() {
		return invited;
	}

	public void setInvited(List<Reference> invited) {
		this.invited = invited;
	}
	
	
}
