package news.ActionImpl;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.json.annotations.JSON;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import news.Action.UserAction;
import news.domainProject.User;
import news.service.UserService;

public class UserActionImpl extends ActionSupport implements UserAction{

	private int id;
	private String phone;
	private User user;
	private UserService userService;
	private String appPath=ServletActionContext.getServletContext().getRealPath("/").replaceAll("\\\\", "/");
	private File upload;
	private String uploadContentType;
	private String uploadFileName;
	private String picRefDir;
	private String result;
	
	
	
	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public String getPicRefDir() {
		return picRefDir;
	}

	public void setPicRefDir(String picRefDir) {
		this.picRefDir = picRefDir;
	}

	public File getUpload() {
		return upload;
	}

	public void setUpload(File upload) {
		this.upload = upload;
	}

	public String getUploadContentType() {
		return uploadContentType;
	}

	public void setUploadContentType(String uploadContentType) {
		this.uploadContentType = uploadContentType;
	}

	public String getUploadFileName() {
		return uploadFileName;
	}

	public void setUploadFileName(String uploadFileName) {
		this.uploadFileName = uploadFileName;
	}

	public String getAppPath() {
		return appPath;
	}

	public void setAppPath(String appPath) {
		this.appPath = appPath;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	@JSON(serialize=false)
	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	@Override
	public String add() {
		User u=(User)ActionContext.getContext().getSession().get("user");
		user.setHeadPic(u.getHeadPic());
		userService.add(user);
		return SUCCESS;
	}

	@Override
	public String update() {
		return null;
	}

	@Override
	public String updatePassById() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String selectById() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String selectByPhone() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String selectPassByPhone() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String deleteById() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String delete() {
		// TODO Auto-generated method stub
		return null;
	}

	public String execute() {
		return SUCCESS;
	}
	
	public String headPicUpload() {
		OutputStream out=null;
		InputStream in=null;
		User u=new User();
		u.setHeadPic("headPic/"+picRefDir+"."+uploadContentType);
		String relPath=u.getHeadPic();
		try {
			String path=appPath+relPath;
			out = new FileOutputStream(new File(path));
			in=new FileInputStream(upload);
			byte[] b=new byte[1024];
			int len=0;
			while((len=in.read(b))!=-1) {
				out.write(b);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			try {
				if(out!=null) {
					out.close();
				}
				if(in!=null) {
					in.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		ActionContext.getContext().getSession().put("user", u);
		result = "{\"flag\":\""+relPath+"\"}";
		return SUCCESS;
	}
	
}
