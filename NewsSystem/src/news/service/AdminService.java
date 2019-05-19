package news.service;

import java.util.List;

import news.domainProject.Admin;

public interface AdminService {
	public void add(Admin admin);
	public void update(Admin admin);
	public String deleteById(int id);
	public String delete(Admin admin);
	public String updatePassById(int id,String pass);
	public List<Admin> selectAll() ;
	public Admin selectById(int id);
	public Admin selectByPhone(String phone);
	public String selectPassByPhone(String phone);
}
