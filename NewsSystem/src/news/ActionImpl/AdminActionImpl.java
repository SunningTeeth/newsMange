package news.ActionImpl;

import com.opensymphony.xwork2.ActionSupport;

import news.Action.AdminAction;
import news.domainProject.Admin;
import news.service.AdminService;

public class AdminActionImpl extends ActionSupport implements AdminAction{

	private AdminService adminDAO;
	private int id;
	private String phone;
	private Admin admin;
	private String password;
	
	
	
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

	public Admin getAdmin() {
		return admin;
	}

	public void setAdmin(Admin admin) {
		this.admin = admin;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	
	public AdminService getAdminDAO() {
		return adminDAO;
	}

	public void setAdminDAO(AdminService adminDAO) {
		this.adminDAO = adminDAO;
	}

	@Override
	public String add() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String update() {
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

	@Override
	public String updatePassById() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String selectAll() {
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

}
