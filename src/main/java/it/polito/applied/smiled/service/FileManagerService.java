package it.polito.applied.smiled.service;

import it.polito.applied.smiled.dto.FileMetadataDTO;
import it.polito.applied.smiled.exception.BadRequestException;
import it.polito.applied.smiled.exception.ForbiddenException;
import it.polito.applied.smiled.security.CustomUserDetails;

import java.io.File;
import java.io.IOException;

import org.springframework.data.domain.Page;
import org.springframework.security.core.Authentication;
import org.springframework.web.HttpMediaTypeNotAcceptableException;
import org.springframework.web.multipart.MultipartFile;

public interface FileManagerService {

	public void postCoverScenario(String id, MultipartFile scenarioCover, CustomUserDetails user) throws IllegalStateException, IOException, BadRequestException, HttpMediaTypeNotAcceptableException;

	public File getScenarioCover(String id);

	public File getUserCover(String id);

	public void postCoverUser(MultipartFile userCover,
			CustomUserDetails user) throws BadRequestException, IllegalStateException, IOException, HttpMediaTypeNotAcceptableException;

	public void postCoverCharacter(MultipartFile characterCover, String id, String characterId,
			CustomUserDetails user) throws BadRequestException, IllegalStateException, IOException, HttpMediaTypeNotAcceptableException;

	public File getCharacterCover(String characterId);

	public File getMedia(String id);

	public String postMedia(MultipartFile media, CustomUserDetails user, String idScenario) throws HttpMediaTypeNotAcceptableException, IllegalStateException, IOException;

	public void postMediaMetadata(String idMedia, FileMetadataDTO fileMeta, Authentication user) throws BadRequestException, ForbiddenException;

	public Page<FileMetadataDTO> getUserImageMetadata(CustomUserDetails user, int nPag, int nItem) throws IOException;

	public Page<FileMetadataDTO> getUserFilesMetadata(CustomUserDetails user,
			Integer nPag, Integer nItem) throws IOException;

	public Page<FileMetadataDTO> getScenarioImageMetadata(String idScenario,
			Integer nPag, Integer nItem) throws IOException;

	public Page<FileMetadataDTO> getScenarioFilesMetadata(String idScenario,
			Integer nPag, Integer nItem) throws IOException;
}
